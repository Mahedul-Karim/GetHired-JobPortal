import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { handleError } from "./controller/error.js";
import { connectDB } from "./config/db.js";

import userRouter from "./routes/user.js";
import resumeRouter from "./routes/resume.js";
import cvRouter from "./routes/cv.js";
import companyRouter from "./routes/company.js";
import jobRouter from "./routes/job.js";

import { configCloudinary } from "./config/cloudinary.js";
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = ["http://localhost:5173", process.env.FRONTEND_URL];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.options("*", cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

connectDB();
configCloudinary();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/resume", resumeRouter);
app.use("/api/v1/cv", cvRouter);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRouter);

app.use(handleError);

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
});

app.listen(PORT, () => {
  console.log(
    `Server running port in ${PORT} and in ${process.env.NODE_ENV?.trim()}  mode`
  );
});
