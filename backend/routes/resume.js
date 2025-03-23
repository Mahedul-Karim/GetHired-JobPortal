import { Router } from "express";

import {
  createResume,
  updateResume,
  getUserResume,
} from "../controller/resume.js";
import { verifyUser } from "../middleware/auth.js";

const router = Router();

router
  .route("/")
  .post(verifyUser, createResume)
  .patch(verifyUser, updateResume)
  .get(verifyUser, getUserResume);

export default router;
