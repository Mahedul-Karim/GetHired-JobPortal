import { Router } from "express";

import { createCv, deleteCv, uploadCv } from "../controller/cv.js";
import { verifyUser } from "../middleware/auth.js";

import upload from "../config/multer.js";

const router = Router();

router.route("/").post(verifyUser, createCv).delete(verifyUser,deleteCv);
router.route("/upload").post(verifyUser, upload.single("cv"), uploadCv);

export default router;
