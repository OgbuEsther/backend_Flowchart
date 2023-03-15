import { Request, Response, NextFunction } from "express";
import { Iuser } from "../interfaces/userInterface";
import userModel from "../model/userModel";
import { AppError, HttpCode } from "../utils/appError";
import { asyncHandler } from "../utils/asyncHandler";

export const register = asyncHandler(
  async (req: Request<{}, {}, Iuser>, res: Response, next: NextFunction) => {
    const { email, name, password, confirmpassword } = req.body;

    const user = await userModel.create(email, name, password, confirmpassword);
    if (!user) {
      next(
        new AppError({
          message: "Account not created",
          httpCode: HttpCode.BAD_REQUEST,
        })
      );
    }

    return res.status(HttpCode.CREATED).json({
      message: "Success",
      data: user,
    });
  }
);
