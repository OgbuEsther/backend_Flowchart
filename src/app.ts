import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/error";
import { AppError, HttpCode } from "./utils/appError";
import router from "./api";

//creating our application
const appConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"));

  //routes (API endpoints)
  app.use("/api", router);

  //checking all routes
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(
      new AppError({
        httpCode: HttpCode.NOT_FOUND,
        message: `this route does not exist : ${req.originalUrl}`,
      })
    );
  });

  //error handler
  app.use(errorHandler);
};

export default appConfig;
