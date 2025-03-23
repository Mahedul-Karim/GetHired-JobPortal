import { createSupabase } from "../config/supabase.js";
import { CV } from "../models/cv.js";
import { Resume } from "../models/resume.js";
import { cvTemplate } from "../util/data.js";
import { catchAsyncError } from "../util/util.js";
import AppError from "../util/error.js";

import handlebars from "handlebars";
import { User } from "../models/user.js";

const createCv = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  const resume = await Resume.findOne({
    user: userId,
  }).select("-aiFeedback -aiResume -createdAt -updatedAt -user");

  if (!resume) {
    return next(
      new AppError("Create a resume first before generating cv", 400)
    );
  }

  const resumeObject = resume.toObject();

  if (req.user.profilePic?.url) {
    resumeObject.userImage = req.user.profilePic.url;
  } else {
    resumeObject.userImage = {
      public_id: "",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_NZykul07nU3cliFuRZQr4_q-gOdkRTmRA&s",
    };
  }

  const supabase = createSupabase();

  const fileName = `cv-${userId}-${Date.now()}.pdf`;

  const { data, error } = await supabase.storage
    .from("user-cv")
    .upload(fileName, req.file.buffer, {
      contentType: req.file.mimetype,
      upsert: true,
    });

  if (error) {
    return next(new AppError("Failed to generate pdf"));
  }

  const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/user-cv/${fileName}`;

  const cv = await CV.create({
    user: userId,
    cvImage: resumeObject.userImage,
    userName: req.user.firstName + " " + req.user.lastName,
    cvFor: resumeObject.headline,
    cvUrl: url,
  });

  await User.findByIdAndUpdate(userId, {
    cv: cv._id,
  });

  res.status(201).json({
    success: true,
    cv,
  });
});

const uploadCv = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  const resume = await Resume.findOne({
    user: userId,
  }).select("-aiFeedback -aiResume -createdAt -updatedAt -user");

  if (!resume) {
    return next(new AppError("Create a resume first before uploading cv", 400));
  }

  if (!req.file) {
    return next(new AppError("Please upload cv again", 400));
  }

  const supabase = createSupabase();

  const fileName = `cv-${userId}-${Date.now()}.pdf`;

  const { data, error } = await await supabase.storage
    .from("user-cv")
    .upload(fileName, req.file.buffer, {
      contentType: req.file.mimetype,
      upsert: true,
    });

  if (error) {
    return next(new AppError("Failed to upload file", 500));
  }

  const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/user-cv/${fileName}`;

  const cvImage = req.user.profilePic?.url
    ? req.user.profilePic
    : {
        public_id: "",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt_NZykul07nU3cliFuRZQr4_q-gOdkRTmRA&s",
      };

  const cv = await CV.create({
    user: userId,
    cvImage,
    userName: req.user.firstName + " " + req.user.lastName,
    cvFor: resume.headline,
    cvUrl: url,
  });

  await User.findByIdAndUpdate(userId, {
    cv: cv._id,
  });

  res.status(201).json({
    success: true,
    cv,
    message: "CV uploaded successfully!",
  });
});

const deleteCv = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;
  const supabase = createSupabase();

  const cv = await CV.findOneAndDelete({
    user: userId,
  });

  if (!cv) {
    return next(new AppError("CV not found", 404));
  }

  const fileName = cv.cvUrl.split("/").pop();

  const { error } = await supabase.storage.from("user-cv").remove([fileName]);

  if (error) {
    return next(new AppError("Failed to delete cv"));
  }

  res.status(200).json({
    success: true,
    message: "cv deleted successfully",
  });
});

export { createCv, uploadCv, deleteCv };
