import handlebars from "handlebars";

import { User } from "../models/user.js";
import { Company } from "../models/company.js";
import AppError from "../util/error.js";
import { sendEmail } from "../util/sendEmail.js";
import {
  calculateProfileCompletion,
  catchAsyncError,
  comparePassword,
  generateToken,
  generateOtp as otpCreator,
} from "../util/util.js";
import { OTP } from "../models/otp.js";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../config/cloudinary.js";
import { CompantState } from "../models/company/State.js";
import { Candidate } from "../models/company/Candidate.js";
import { UserState } from "../models/userState.js";

const generateOtp = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const htmlToSend = handlebars.compile(`<html>
  <body style="font-family: Arial, sans-serif; padding: 20px; color: #333; text-align: center;">
    <h2 style="color: #5049e1;">Hello, {{name}}!</h2>
    <p>Welcome to <strong>GetHired</strong> – Your Job Search Partner!</p>
    <p>Your One-Time Password (OTP) for verification is:</p>

    <div style="font-size: 24px; font-weight: bold; color: #5049e1; padding: 10px; 
                border: 2px dashed #5049e1; display: inline-block;">
      {{otp}}
    </div>

    <p>Please enter this OTP to complete your verification. This otp expires in 5 minutes</p>

    <p>If you didn’t request this, please ignore this email.</p>

  </body>
</html>
`);

  const otp = otpCreator();

  const expirationTime = new Date(Date.now() + 5 * 60 * 1000);

  const existingOtp = await OTP.findOne({
    email,
  });

  if (existingOtp) {
    await OTP.findOneAndDelete({ email });
  }

  await OTP.create({
    otp,
    email,
    expiresIn: expirationTime,
  });

  await sendEmail({
    reciever: email,
    subject: "Verification OTP",
    body: htmlToSend({ name: "John Doe", otp }),
  });

  res.status(200).json({
    success: true,
    message: "An otp has been sent to your email",
  });
});

const createUser = catchAsyncError(async (req, res, next) => {
  const { otp, password, confirmPassword, accountType, ...data } = req.body;

  if (password !== confirmPassword) {
    return next(
      new AppError("Password and confirm password does not match", 401)
    );
  }

  const profileCompletion = calculateProfileCompletion(accountType, data);

  const findOtp = await OTP.findOne({
    email: data.email,
    otp,
  });

  if (!findOtp) {
    return next(
      new AppError("Otp not found or has expired. Please try again", 401)
    );
  }

  if (findOtp.expiresIn < new Date()) {
    await OTP.findOneAndDelete({ email: data.email, otp });
    return next(new AppError("Otp has expired", 401));
  }

  let user;

  if (accountType === "candidate") {
    user = await User.create({
      ...data,
      password,
      accountType,
      userProfileCompletion: profileCompletion,
    });

    await UserState.create({
      user: user._id,
      profileCompletion,
    });
  }

  if (accountType === "employer") {
    user = await Company.create({
      ...data,
      password,
      accountType,
      profileCompletion,
    });

    await CompantState.create({
      company: user._id,
      profileCompletion,
    });
  }

  await OTP.findOneAndDelete({ email: data.email, otp });

  res.status(201).json({
    success: true,
    user,
  });
});

const signIn = catchAsyncError(async (req, res, next) => {
  const { accountType, email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("All fields are required", 403));
  }

  let user;

  if (accountType === "candidate") {
    user = await User.findOne({ email }).populate("resume", "-aiResume");
  } else {
    user = await Company.findOne({ email });
  }

  if (!user) {
    return next(new AppError("User does not exist", 404));
  }

  if (!(await comparePassword(password, user.password))) {
    return next(new AppError("Invalid password"));
  }

  const token = generateToken({ email: user.email, accountType });

  user.password = null;

  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  res.cookie("token", token, options).status(200).json({
    success: true,
    user,
    token,
  });
});

const updateUserProfile = catchAsyncError(async (req, res, next) => {
  const userId = req.user._id;

  const existingPic = req.user.profilePic?.public_id || null;

  const data = { ...req.body };

  let profilePic = null;

  if (req.file) {
    if (existingPic) {
      await deleteFromCloudinary(existingPic);
    }

    const result = await uploadToCloudinary(req.file);

    profilePic = {
      public_id: result.public_id,
      url: result.secure_url,
    };

    data.profilePic = profilePic;
  }

  const user = await User.findByIdAndUpdate(
    userId,
    {
      ...data,
    },
    {
      new: true,
    }
  );

  user.userProfileCompletion = calculateProfileCompletion("candidate", user);

  await user.save();

  res.status(200).json({
    success: true,
    user,
    message: "User updated successfully!",
  });
});

const updateCompanyProfile = catchAsyncError(async (req, res, next) => {
  const companyId = req.company._id;

  const data = { ...req.body };

  let photoGallery;
  let companyLogo = null;
  let companyBanner = null;

  if (req.files?.galleryItems && req.files.galleryItems.length > 0) {
    photoGallery = await Promise.all(
      req.files.galleryItems.map(async (file) => {
        const result = await uploadToCloudinary(file);

        return {
          public_id: result.public_id,
          url: result.secure_url,
        };
      })
    );

    data.photoGallery = photoGallery;
  }

  if (req.files?.avatar?.[0]) {
    const result = await uploadToCloudinary(req.files.avatar[0]);

    companyLogo = {
      public_id: result.public_id,
      url: result.secure_url,
    };

    data.companyLogo = companyLogo;
  }

  if (req.files?.banner?.[0]) {
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
    },
    {
      new: true,
    }
  );

  company.profileCompletion = calculateProfileCompletion("employer", company);
  await company.save();

  res.status(200).json({
    success: true,
    message: "Profile updated successfully!",
    company,
  });
});

const logOut = catchAsyncError(async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.cookie("token", null, options).json({
    success: true,
    token: null,
    user: null,
  });
});

const userStates = catchAsyncError(async (req, res) => {
  const userId = req.user._id;

  const now = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(now.getMonth() - 5);

  const lastSixMonthsData = [];
  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(now.getMonth() - i);
    lastSixMonthsData.push({
      month: date.getMonth() + 1,
      applied: 0,
      rejected: 0,
      responded: 0,
    });
  }

  const state = await UserState.findOne({ user: userId });

  const applications = await Candidate.aggregate([
    {
      $match: {
        appliedAt: { $gte: sixMonthsAgo },
      },
    },
    {
      $group: {
        _id: { $month: "$appliedAt" },
        applied: { $sum: 1 },
        rejected: {
          $sum: { $cond: [{ $eq: ["$status", "rejected"] }, 1, 0] },
        },
        responded: {
          $sum: {
            $cond: [{ $or: [{ $eq: ["$status", "responded"] }] }, 1, 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        month: "$_id",
        applied: 1,
        rejected: 1,
        responded: 1,
      },
    },
    { $sort: { month: 1 } },
  ]);

  const finalData = lastSixMonthsData.map((month) => {
    const found = applications.find((app) => app.month === month.month);
    return found ? found : month;
  });

  res.status(200).json({
    success: true,
    data: finalData,
    state,
  });
});

export {
  generateOtp,
  createUser,
  updateUserProfile,
  signIn,
  updateCompanyProfile,
  logOut,
  userStates,
};
