import { Schema, model } from "mongoose";

const otpSchema = new Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresIn: { type: Date, required: true },
});


export const OTP = model('OTP',otpSchema);
