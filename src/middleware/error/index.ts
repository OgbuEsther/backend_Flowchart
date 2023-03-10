import { Request, Response, NextFunction } from "express";
import { AppError, HttpCode } from "../../utils/appError";

//creating our error handler
export const errorHandler = (
  err: AppError,
  req: Response,
  res: Response,
  next: NextFunction
) => {};
