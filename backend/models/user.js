import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
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
    profilePic: {
      public_id: String,
      url: String,
    },
    portfolio: {
      type: String,
    },
    qualification: {
      type: String,
    },
    knownLanguages: {
      type: String,
    },
    age: {
      type: Number,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    postCode: {
      type: String,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    address: {
      type: String,
    },
    bio: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    resume: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
    },
    userProfileCompletion: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

export const User = model("User", userSchema);
