import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import { handleError } from "./controller/error.js";
import { connectDB } from "./config/db.js";

import userRouter from "./routes/user.js";
import { configCloudinary } from "./config/cloudinary.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  credentials:true,
  origin:process.env.FRONTEND_URL
}));
app.options("*", cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

connectDB();
configCloudinary();

app.use("/api/v1/user", userRouter);

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
