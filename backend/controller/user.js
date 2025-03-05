import handlebars from "handlebars";

import { User } from "../models/user.js";
import { Company } from "../models/company.js";
import AppError from "../util/error.js";
import { sendEmail } from "../util/sendEmail.js";
import {
  calculateProfileCompletion,
  catchAsyncError,
  generateOtp as otpCreator,
} from "../util/util.js";
import { OTP } from "../models/otp.js";

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
    message: "An otp has been sent to your email"
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
    await OTP.findOneAndDelete({ email:data.email, otp });
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
  }

  if (accountType === "employer") {
    user = await Company.create({
      ...data,
      password,
      accountType,
      profileCompletion,
    });
  }

  await OTP.findOneAndDelete({ email:data.email, otp });

  res.status(201).json({
    success: true,
    user,
  });
});

export { generateOtp, createUser };
