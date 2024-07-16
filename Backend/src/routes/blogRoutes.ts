import express from "express";
const router = express.Router();

import { authMiddleware } from "../middleware/authMiddleware";

import { createBlogController } from "../controllers/blog/createBlogController";
import { updateBlogController } from "../controllers/blog/updateBlogController";
import { getBlogController } from "../controllers/blog/getBlogController";
import { getBlogsController } from "../controllers/blog/getBlogsController";

router.use(authMiddleware);

router.post("/", createBlogController);
router.put("/", updateBlogController);
router.get("/blog/:id", getBlogController);
router.get("/", getBlogsController);

export const blogRoutes = router;
