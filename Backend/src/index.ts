import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Prisma, PrismaClient } from "@prisma/client";
dotenv.config();
const app: Express = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

import { authRoutes } from "./routes/authRoutes";
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
