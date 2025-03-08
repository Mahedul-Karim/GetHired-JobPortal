import { Router } from "express";

import { createResume } from "../controller/resume.js";
import { verifyUser } from "../middleware/auth.js";

const router = Router();

router.route("/").post(verifyUser,createResume);

export default router;
