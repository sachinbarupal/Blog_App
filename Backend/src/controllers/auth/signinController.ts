import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { errorResponse, successResponse } from "../../errorResponse";

import { signinZodSchema, signinInput } from "../../types";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

async function main(req: Request, res: Response) {
  try {
    const { username, password }: signinInput = req.body;

    const { success } = signinZodSchema.safeParse({ username, password });
    if (!success) return errorResponse(res, "Invalid Inputs");

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) return errorResponse(res, "User Not Found", 404);

    const validate = bcrypt.compareSync(password, user.password);
    if (!validate) return errorResponse(res, "Incorrect Password");

    const secret = process.env.JWT_SECRET;

    if (!secret) return errorResponse(res, "Internal Server Error");

    const token = jwt.sign({ id: user.id }, secret);

    successResponse(res, "Login Successfull", { token });
  } catch (err) {
    console.log(err);
    errorResponse(res, "Error in Login");
  }
}

export const signinController = (req: Request, res: Response) => {
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
