import { Router } from "express";
import {
  generateOtp,
  createUser,
  updateUserProfile,
  signIn,
  updateCompanyProfile,
} from "../controller/user.js";
import upload, { uploadMiddleware } from "../config/multer.js";
import { verifyEmployer, verifyUser } from "../middleware/auth.js";

const router = Router();

router.route("/otp").post(generateOtp);
router.route("/sign-up").post(createUser);
router.route("/login").post(signIn);
router.route("/").patch(verifyUser, upload.single("avatar"), updateUserProfile);
router
  .route("/company")
  .patch(verifyEmployer, uploadMiddleware,updateCompanyProfile);
export default router;
