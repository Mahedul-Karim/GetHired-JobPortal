import { Schema, model } from "mongoose";

const userStateSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    visitors: {
      type: Number,
      default: 0,
    },
    jobsApplied: {
      type: Number,
      default: 0,
    },
    profileCompletion: {
      type: Number,
      default: 0,
    },
    savedJobs: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const UserState = model("UserState", userStateSchema);
