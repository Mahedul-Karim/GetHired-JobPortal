import { createSupabase } from "../config/supabase.js";
import { CV } from "../models/cv.js";
import { Resume } from "../models/resume.js";
import { cvTemplate } from "../util/data.js";
import { catchAsyncError } from "../util/util.js";
import AppError from "../util/error.js";

import handlebars from "handlebars";
import { chromium } from "@playwright/test";

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

  const template = handlebars.compile(cvTemplate);
  const htmlContent = template(resumeObject);

  const browser = await chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setContent(htmlContent, {
    waitUntil: "load",
  });

  const pdfBuffer = await page.pdf({
    format: "A4"
  }); 

  await browser.close();

  const fileName = `cv-${userId}.pdf`;

  const { data, error } = await supabase.storage
    .from("user-cv")
    .upload(fileName, pdfBuffer, {
      contentType: "application/pdf",
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

  res.status(201).json({
    success: true,
    cv,
  });
});

export { createCv };
