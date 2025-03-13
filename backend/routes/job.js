import { Router } from "express";

import { verifyEmployer } from "../middleware/auth.js";

import upload from "../config/multer.js";
import { createJob } from "../controller/job.js";

const router = Router();

router.route("/").post(verifyEmployer, upload.single("banner"), createJob);

export default router;
