import jwt from "jsonwebtoken";

import { User } from "../models/user.js";
import { Company } from "../models/company.js";
import AppError from "../util/error.js";
import { catchAsyncError } from "../util/util.js";

const verifyUser = catchAsyncError(async (req, res, next) => {
  const token = req.cookies?.token
    ? req.cookies.token
    : req.header("authorization")?.split(" ")[1];

  if (!token) {
    return next(new AppError("No token has been found", 400));
  }

  const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodeToken) {
    return next(new AppError("Invalid token", 400));
  }



  const user = await User.findOne({ email: decodeToken.email });

  user.password = null;

  req.user = user;
  next();
});

const verifyEmployer = catchAsyncError(async (req, res, next) => {
  const token = req.cookies?.token
    ? req.cookies.token
    : req.header("authorization")?.split(" ")[1];

  if (!token) {
    return next(new AppError("No token has been found", 403));
  }

  const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodeToken) {
    return next(new AppError("Invalid token", 403));
  }

  if (decodeToken?.accountType !== "employer") {
    return next(new AppError("You can not access this resources", 400));
  }

  const company = await Company.findOne({ email: decodeToken.email });

  company.password = null;

  req.company = company;
  next();
});

export { verifyUser,verifyEmployer };
