import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

import {
  CustomRequest,
  updateBlogZodSchema,
  updateBlogInput,
} from "../../types";

const prisma = new PrismaClient();

async function main(req: Request, res: Response) {
  try {
    const { id, title, content }: updateBlogInput = req.body;
    const { id: authorId } = req as CustomRequest;
    const { success } = updateBlogZodSchema.safeParse({
      id,
      title,
      content,
    });

    if (!success) return errorResponse(res, "Invalid Inputs");

    if (title === "" || (title && title.trim() === ""))
      return errorResponse(res, "Invalid Inputs");

    if (content === "" || (content && content.trim() === ""))
      return errorResponse(res, "Invalid Inputs");

    await prisma.blog.update({
      where: {
        id,
        authorId,
      },
      data: {
        title,
        content,
      },
    });

    successResponse(res, "Blog Update Success");
  } catch (err) {
    console.log(err);
    errorResponse(res, "Error in Updating Blog", 500);
  }
}

export const updateBlogController = (req: Request, res: Response) => {
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
