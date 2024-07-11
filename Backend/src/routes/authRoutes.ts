import express from "express";
const router = express.Router();

import { signupController } from "../controllers/auth/signupController";
import { signinController } from "../controllers/auth/signinController";

router.post("/signup", signupController);
router.post("/signin", signinController);

export const authRoutes = router;
