import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

import zod from "zod";

const prisma = new PrismaClient();

interface CustomRequest extends Request {
  id: number;
}

const bodySchema = zod.object({
  id: zod.number(),
  title: zod.string().optional(),
  content: zod.string().optional(),
});

type bodyProps = zod.infer<typeof bodySchema>;

async function main(req: Request, res: Response) {
  try {
    const { id, title, content }: bodyProps = req.body;
    const { id: authorId } = req as CustomRequest;
    const { success } = bodySchema.safeParse({
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
