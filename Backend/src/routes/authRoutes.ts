import express from "express";
const router = express.Router();

import { signupController } from "../controllers/signupController";

router.get("/signup", signupController);

export const authRoutes = router;
