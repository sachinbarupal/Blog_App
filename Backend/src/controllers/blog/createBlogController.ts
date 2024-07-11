import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();
import { errorResponse, successResponse } from "../../errorResponse";

interface CustomRequest extends Request {
  id: number;
}

interface bodyProps {
  title: string;
  content: string;
}

async function main(req: Request, res: Response) {
  try {
    const id = (req as CustomRequest).id;
    const { title, content }: bodyProps = req.body;

    if (!title || title.trim() === "")
      return errorResponse(res, "Title is Required !!");

    if (!content || content.trim() === "")
      return errorResponse(res, "Content is Required !!");

    await prisma.blog.create({
      data: {
        title,
        content,
        authorId: id,
      },
    });
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
