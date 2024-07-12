import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
import zod from "zod";

export interface JWT_Payload extends JwtPayload {
  id: number;
}

export interface CustomRequest extends Request {
  id: number;
}

export const signinZodSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

export const createBlogZodSchema = zod.object({
  title: zod.string().trim().min(1),
  content: zod.string().trim().min(1),
});

export const updateBlogZodSchema = zod.object({
  id: zod.number(),
  title: zod.string().optional(),
  content: zod.string().optional(),
});

export type signinInput = zod.infer<typeof signinZodSchema>;
export type createBlogInput = zod.infer<typeof createBlogZodSchema>;
export type updateBlogInput = zod.infer<typeof updateBlogZodSchema>;
