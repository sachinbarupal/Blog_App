import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createBlogController } from "../controllers/blog/createBlogController";
const router = express.Router();

router.use(authMiddleware);

router.post("/", createBlogController);

export const blogRoutes = router;
