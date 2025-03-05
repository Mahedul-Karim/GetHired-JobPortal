import crypto from "crypto";

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
    facebook: 5,
    twitter: 3,
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

  if (profileType === "candidate") {
    for (const fields in userPoints) {
      if (schema[fields] && schema[fields] !== "") {
        totalPoints += userPoints[fields];
      }
    }
  }

  if (profileType === "employer") {
    for (const fields in companyPoints) {
      if (Array.isArray(schema[fields]) && schema[fields].length > 0) {
        totalPoints += companyPoints[fields];
      }

      if (schema[fields]) {
        totalPoints += companyPoints[fields];
      }
    }
  }

  return (totalPoints / maxPoints) * 100;
};

const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

const generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};

export { calculateProfileCompletion, catchAsyncError, generateOtp };
