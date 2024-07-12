import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

import zod from "zod";

const prisma = new PrismaClient();

const bodySchema = zod.object({ id: zod.number() });
type bodyProps = zod.infer<typeof bodySchema>;

async function main(req: Request, res: Response) {
  try {
    const { id }: bodyProps = req.body;
    const { success } = bodySchema.safeParse({ id });

    if (!success) return errorResponse(res, "Invalid Input");

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        author: true,
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
