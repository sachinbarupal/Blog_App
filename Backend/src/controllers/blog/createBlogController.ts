import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

import {
  CustomRequest,
  createBlogInput,
  createBlogZodSchema,
} from "../../types";

const prisma = new PrismaClient();

async function main(req: Request, res: Response) {
  try {
    const id = (req as CustomRequest).id;
    const { title, content }: createBlogInput = req.body;

    const { success } = createBlogZodSchema.safeParse({
      title,
      content,
    });

    if (!success) return errorResponse(res, "Invalid Inputs");

    await prisma.blog.create({
      data: {
        title,
        content,
        authorId: id,
      },
    });

    successResponse(res, "Blog Creation Success");
  } catch (err) {
    console.log(err);
    errorResponse(res, "Error in Creating Blog", 500);
  }
}

export const createBlogController = (req: Request, res: Response) => {
  main(req, res)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
