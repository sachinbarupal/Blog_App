import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

import { authRoutes } from "./routes/authRoutes";
import { blogRoutes } from "./routes/blogRoutes";

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
