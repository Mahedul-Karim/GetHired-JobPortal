import { createSupabase } from "../config/supabase.js";
import { CV } from "../models/cv.js";
import { Resume } from "../models/resume.js";
import { catchAsyncError } from "../util/util.js";
import AppError from "../util/error.js";

import { User } from "../models/user.js";

const getCv = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  const cv = await CV.findOne({ user: userId });

  res.status(200).json({
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

  const fileName = req.file.originalname
    ? req.file.originalname
    : `cv-${req.user.firstName}.pdf`;

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

  const user = await User.findByIdAndUpdate(
    userId,
    {
      cv: cv._id,
    },
    { new: true }
  )
    .populate("resume", "-aiResume")
    .populate("cv", "cvUrl")
    .select("-password");

  res.status(201).json({
    success: true,
    cv,
    message: "CV uploaded successfully!",
    user,
  });
});

const deleteCv = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;
  const supabase = createSupabase();

  const { url } = req.body;


  const fileName = url.split("/").pop();

  const { error } = await supabase.storage.from("user-cv").remove([fileName]);

  if (error) {
    return next(new AppError("Failed to delete cv"));
  }

  const cv = await CV.findOneAndDelete({
    user: userId,
  });

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $unset: {
        cv: "",
      },
    },
    {
      new: true,
    }
  )
    .populate("resume", "-aiResume")
    .populate("cv", "cvUrl")
    .select("-password");

  if (!cv) {
    return next(new AppError("CV not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "cv deleted successfully",
    user,
  });
});

export { uploadCv, deleteCv, getCv };
