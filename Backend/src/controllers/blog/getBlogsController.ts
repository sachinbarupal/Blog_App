import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

const prisma = new PrismaClient();

async function main(req: Request, res: Response) {
  try {
    const page = req.body.page | 0;
    const blogs = await prisma.blog.findMany({
      take: 10,
      skip: 10 * page,
    });

    successResponse(res, "Fetch Successfull", { blogs });
  } catch (err) {
    console.log(err);
    errorResponse(res, "Error in Fetching Blogs", 500);
  }
}

export const getBlogsController = (req: Request, res: Response) => {
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
