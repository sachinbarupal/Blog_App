import { Response } from "express";

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 500
) => {
  res.status(statusCode).json({
    success: false,
    message,
  });
};

export const successResponse = (res: Response, message: string, data = {}) => {
  res.json({
    success: true,
    message,
    ...data,
  });
};
