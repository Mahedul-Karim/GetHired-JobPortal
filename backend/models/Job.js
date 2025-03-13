import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    jobType: {
      type: String,
    },
    salary: {
      type: Number,
    },
    experience: {
      type: String,
    },
    qualification: {
      type: String,
    },
    gender: {
      type: String,
    },
    jobLocation: {
      type: String,
    },
    vacancy: {
      type: Number,
    },
    gotHired: {
      type: Number,
      default: 0,
    },
    banner: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    status: {
      type: String,
      enum: ["active", "expired", "filled"],
      default: "active",
    },
    totalApplied: {
      type: Number,
      default: 0,
    },
    jobDescription: {
      type: String,
    },
    requirements: [
      {
        type: String,
      },
    ],
    responsibilities: [
      {
        type: String,
      },
    ],
    deadline: {
      type: Date,
    },
    employer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Job = model("Job", jobSchema);
