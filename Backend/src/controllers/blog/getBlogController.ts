import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

const prisma = new PrismaClient();

async function main(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const blog = await prisma.blog.findUnique({
      where: { id: Number(id) },
      include: {
        author: {
          select: { username: true },
        },
      },
    });
    successResponse(res, "Fetch Successfull", { blog });
  } catch (err) {
    console.log(err);
    errorResponse(res, "Error in Fetching Blog", 500);
  }
}

export const getBlogController = (req: Request, res: Response) => {
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
