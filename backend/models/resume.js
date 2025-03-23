import { Schema, model } from "mongoose";

const resumeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    headline: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    experiences: [
      {
        workingPosition: {
          type: String,
        },
        companyName: {
          type: String,
        },
        workedFor: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        currentlyWorking: {
          type: Boolean,
        },
        description: {
          type: String,
        },
      },
    ],
    education: [
      {
        degree: {
          type: String,
        },
        university: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: String,
        },
      },
    ],
    projects: [
      {
        name: {
          type: String,
        },
        projectLink: {
          type: String,
        },
        technologies: [
          {
            type: String,
          },
        ],
      },
    ],
    aiResume: { type: String },
    aiFeedback: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Resume = model("Resume", resumeSchema);
