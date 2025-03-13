import { Schema, model } from "mongoose";

const jobSchema = new Schema({});

export const Job = model("Job", jobSchema);
