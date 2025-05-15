import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../config/cloudinary.js";
import { Company } from "../models/company.js";
import { Candidate } from "../models/company/Candidate.js";
import { CompantState } from "../models/company/State.js";
import { Job } from "../models/job.js";
import { Notification } from "../models/notifications.js";
import AppError from "../util/error.js";
import { calculateProfileCompletion, catchAsyncError } from "../util/util.js";

const getStates = catchAsyncError(async (req, res, next) => {
  const sixMonthsAgo = new Date();
  const now = new Date();

  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const companyId = req.company._id;

  const state = await CompantState.findOne({
    company: companyId,
  });

  if (!state) {
    return next(
      new AppError("Something went wrong while fetching data! Please try again")
    );
  }

  const applicants = await Candidate.aggregate([
    {
      $match: {
        appliedAt: {
          $gte: sixMonthsAgo,
        },
      },
    },
    {
      $group: {
        _id: {
          $month: "$appliedAt",
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $project: {
        _id: 0,
        month: "$_id",
        count: 1,
      },
    },
    { $sort: { month: 1 } },
  ]);

  const lastSixMonthsData = [];

  for (let i = 6; i > 0; i--) {
    const date = new Date();
    date.setMonth(now.getMonth() - i);
    lastSixMonthsData.push({
      month: date.getMonth() + 1,
      count: Math.round(Math.random() * 500),
    });
  }

  const finalData = lastSixMonthsData.map((mth) => {
    const data = applicants.find((state) => state.month === mth.month);

    return data ? data : mth;
  });

  const notifications = await Notification.find({
    userId: companyId,
    isRead: false,
  });

  const recentCandidates = await Candidate.find({ employerId: companyId })
    .populate("candidateId", "firstName lastName profilePic")
    .populate("jobId", "title jobLocation")
    .limit(4);


  res.status(200).json({
    success: true,
    state,
    applicants: finalData,
    notifications,
    recentCandidates
  });
});

const updateCompanyProfile = catchAsyncError(async (req, res, next) => {
  const companyId = req.company._id;

  const data = { ...req.body };

  const existingAvatar = req.company.companyLogo?.public_id || null;
  const existingBanner = req.company.companyBanner?.public_id || null;
  const existingGalleryItems =
    req.company.photoGallery?.length > 0 ? true : false;

  console.log(existingGalleryItems);

  let gallery = [];
  let companyLogo = null;
  let companyBanner = null;

  if (req.files?.galleryItems && req.files.galleryItems.length > 0) {
    if (existingGalleryItems) {
      await Promise.all(
        req.company.photoGallery.map(async (gal) => {
          const result = await deleteFromCloudinary(gal.public_id);

          return result;
        })
      );
    }

    gallery = await Promise.all(
      req.files.galleryItems.map(async (file) => {
        const result = await uploadToCloudinary(file);

        return {
          public_id: result.public_id,
          url: result.secure_url,
        };
      })
    );
  }

  if (req.files?.avatar?.[0]) {
    if (existingAvatar) {
      await deleteFromCloudinary(existingAvatar);
    }

    const result = await uploadToCloudinary(req.files.avatar[0]);

    companyLogo = {
      public_id: result.public_id,
      url: result.secure_url,
    };

    data.companyLogo = companyLogo;
  }

  if (req.files?.banner?.[0]) {
    if (existingBanner) {
      await deleteFromCloudinary(existingBanner);
    }

    const result = await uploadToCloudinary(req.files.banner[0]);

    companyBanner = {
      public_id: result.public_id,
      url: result.secure_url,
    };

    data.companyBanner = companyBanner;
  }

  const company = await Company.findByIdAndUpdate(
    companyId,
    {
      ...data,
      $push: {
        photoGallery: {
          $each: gallery,
        },
      },
    },
    {
      new: true,
    }
  );

  const percentage = calculateProfileCompletion("employer", company);

  company.profileCompletion = percentage;

  await CompantState.findOneAndUpdate(
    { company: company._id },
    {
      profileCompletion: percentage,
    },
    {
      new: true,
    }
  );

  await company.save();

  res.status(200).json({
    success: true,
    message: "Profile updated successfully!",
    company,
  });
});

export { getStates, updateCompanyProfile };
