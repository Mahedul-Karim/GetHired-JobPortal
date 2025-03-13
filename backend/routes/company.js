import { Router } from "express";

import { verifyEmployer } from "../middleware/auth.js";

import upload from "../config/multer.js";
import { getStates } from "../controller/company.js";

const router = Router();

router.route('/').get(verifyEmployer,getStates);

export default router;