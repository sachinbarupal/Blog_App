import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../errorResponse";

interface payload extends JwtPayload {
  id: number;
}

interface CustomRequest extends Request {
  id: number;
}

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

    const response = jwt.verify(token, secret) as payload;
    if (!response) return errorResponse(res, "Invalid Auth Token");

    (req as CustomRequest).id = response.id;
    next();
  } catch (err) {
    console.log(err);
    errorResponse(res, "Internal Error in Authorization !");
  }
}
