import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const calculateProfileCompletion = (profileType, schema) => {
  const userPoints = {
    firstName: 5,
    lastName: 5,
    email: 8,
    phone: 8,
    profilePic: 7,
    portfolio: 7,
    knownLanguages: 5,
    bio: 10,
    age: 3,
    country: 3,
    city: 3,
    postCode: 2,
    gender: 2,
    dateOfBirth: 4,
    address: 4,
    facebook: 6,
    twitter: 6,
    github: 6,
    linkedin: 6,
  };

  const companyPoints = {
    companyName: 10,
    email: 10,
    phone: 8,
    companyLogo: 10,
    companyBanner: 7,
    website: 7,
    establishedAt: 5,
    description: 10,
    photoGallery: 5,
    comapnyLocation: 8,
    facebook: 5,
    twitter: 5,
    whatsapp: 5,
    linkedin: 5,
  };

  let totalPoints = 0;
  let maxPoints = 100;

  const points = profileType === "employer" ? companyPoints : userPoints;
  

  for (const field in points) {
    const value = schema[field];
    
    if (value && Array.isArray(value) && value.length > 0) {
      totalPoints += points[field];
      continue;
    }

    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      !Object.values(value).includes(undefined)
    ) {
      totalPoints += points[field];
      continue;
    }

    if (
      value &&
      value !== "" &&
      typeof value !== "object" &&
      !Array.isArray(value)
    ) {
      totalPoints += points[field];
      continue;
    }
  }

  const percentage = (totalPoints / maxPoints) * 100;


  return Math.round(percentage);
};

const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const generateToken = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

const comparePassword = async (passwordToCompare, existingPassword) => {
  return await bcrypt.compare(passwordToCompare, existingPassword);
};

export {
  calculateProfileCompletion,
  catchAsyncError,
  generateOtp,
  generateToken,
  comparePassword,
};
