import { Router } from "express";
import { generateOtp,createUser } from "../controller/user.js";

const router = Router();

router.route("/otp").post(generateOtp);
router.route("/sign-up").post(createUser);

export default router;
