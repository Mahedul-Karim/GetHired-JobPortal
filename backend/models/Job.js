import mongoose from "mongoose";

const { Schema, model,models } = mongoose;

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required:true
    },
    category: {
      type: String,
      required:true
    },
    jobType: {
      type: String,
      required:true
    },
    salary: {
      type: Number,
      required:true
    },
    experience: {
      type: String,
      required:true
    },
    qualification: {
      type: String,
      required:true
    },
    gender: {
      type: String,
      required:true
    },
    jobLocation: {
      type: String,
      required:true
    },
    vacancy: {
      type: Number,
      required:true
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
      required:true
    },
    requirements: [
      {
        type: String,
        required:true
      },
    ],
    responsibilities: [
      {
        type: String,
        required:true
      },
    ],
    deadline: {
      type: Date,
      required:true
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

export const Job = models.Job || model("Job", jobSchema);
