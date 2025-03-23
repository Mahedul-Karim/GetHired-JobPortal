import { Router } from "express";
import {
  generateOtp,
  createUser,
  updateUserProfile,
  signIn,
  logOut,
  userStates,
  getAppliedJobs,
} from "../controller/user.js";
import upload, { uploadMiddleware } from "../config/multer.js";
import { verifyEmployer, verifyUser } from "../middleware/auth.js";

const router = Router();

router.route("/otp").post(generateOtp);
router.route("/sign-up").post(createUser);
router.route("/login").post(signIn);
router
  .route("/")
  .patch(verifyUser, upload.single("avatar"), updateUserProfile)
  .get(verifyUser, getAppliedJobs);
router.route("/company").post(verifyEmployer, logOut);
router.route("/logout").post(verifyUser, logOut);
router.route("/state").get(verifyUser, userStates);

export default router;
