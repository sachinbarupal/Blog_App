import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../errorResponse";

import { JWT_Payload, CustomRequest } from "../types";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization;
    if (!token) return errorResponse(res, "Invalid Auth Token");

    const secret = process.env.JWT_SECRET;
    if (!secret) return errorResponse(res, "Internal Server Error");

    const response = jwt.verify(token, secret) as JWT_Payload;
    if (!response) return errorResponse(res, "Invalid Auth Token");

    (req as CustomRequest).id = response.id;
    next();
  } catch (err) {
    console.log(err);
    errorResponse(res, "Internal Error in Authorization !");
  }
}
