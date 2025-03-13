import { Schema, model } from "mongoose";

const companyStateSchema = new Schema(
  {
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    jobsPosted: {
      type: Number,
      default: 0,
    },
    applicants: {
      type: Number,
      default: 0,
    },
    profileCompletion: {
      type: Number,
      default: 0,
    },
    profileViewed: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const CompantState = model("CompanyState", companyStateSchema);
