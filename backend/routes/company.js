import { Router } from "express";

import { verifyEmployer } from "../middleware/auth.js";

import upload, { uploadMiddleware } from "../config/multer.js";
import { getStates, updateCompanyProfile } from "../controller/company.js";

const router = Router();

router
  .route("/")
  .get(verifyEmployer, getStates)
  .patch(verifyEmployer, uploadMiddleware, updateCompanyProfile);

export default router;
