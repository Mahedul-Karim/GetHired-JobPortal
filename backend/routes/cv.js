import { Router } from "express";

import { deleteCv, uploadCv, getCv } from "../controller/cv.js";
import { verifyUser } from "../middleware/auth.js";

import upload from "../config/multer.js";

const router = Router();

router
  .route("/")
  .post(verifyUser, upload.single("cv"), uploadCv)
  .delete(verifyUser, deleteCv)
  .get(verifyUser, getCv);

export default router;
