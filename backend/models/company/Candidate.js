import { Schema, model } from "mongoose";

const candidateSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "Job",
  },
  employerId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  appliedAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["rejected", "declined", "approved", "hired"],
  },
});

export const Candidate = model("Candidate", candidateSchema);
