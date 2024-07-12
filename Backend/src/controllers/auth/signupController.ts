import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

import { signinZodSchema, signinInput } from "../../types";

import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main(req: Request, res: Response) {
  try {
    const { username, password }: signinInput = req.body;

    const { success } = signinZodSchema.safeParse({ username, password });
    if (!success) return errorResponse(res, "Invalid Inputs");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) return errorResponse(res, "Username Already Taken !!");

    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    successResponse(res, "Registration Success");
  } catch (err) {
    console.log(err);
    errorResponse(res, "Error in Registration", 500);
  }
}

export const signupController = (req: Request, res: Response) => {
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
