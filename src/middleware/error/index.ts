import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/appError";

//creating the developer's error

const devErrors = (err: AppError, res: Response) => {
  return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    name: AppError.name,
    error: err,
    message: err.message,
    stack: err.stack,
    status: err.httpCode,
  });
};

//creating our error handler
export const errorHandler = (
  err: AppError,
  req: Response,
  res: Response,
  next: NextFunction
) => {};
