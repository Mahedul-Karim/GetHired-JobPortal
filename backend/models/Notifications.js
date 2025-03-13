import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ["message", "rejected", "approved", "hired", "declined"],
    required: true,
  },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export const Notification = model("Notification", notificationSchema);
