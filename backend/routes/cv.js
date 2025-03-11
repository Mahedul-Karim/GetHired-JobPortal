import { Router } from "express";

import { createCv } from "../controller/cv.js";
import { verifyUser } from "../middleware/auth.js";

const router = Router();

router.route("/").post(verifyUser, createCv);

export default router;
