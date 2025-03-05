import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
    },
    accountType: {
      type: String,
      required: true,
      enum: ["candidate", "employer"],
    },
    phone: {
      type: String,
    },
    companyLogo: {
      public_id: String,
      url: String,
    },
    companyBanner: {
      public_id: String,
      url: String,
    },
    website: {
      type: String,
    },
    establishedAt: {
      type: String,
    },
    description: {
      type: Number,
    },
    photoGallery: [
      {
        public_id: String,
        url: String,
      },
    ],
    comapnyLocation:{
        type:String
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    whatsapp: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    profileCompletion: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

companySchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password =await bcrypt.hash(this.password, 10);
});

export const Company = model("Company", companySchema);
