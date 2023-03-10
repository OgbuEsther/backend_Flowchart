import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/error";

//creating our application
const appConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"));

  //checking all routes
  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({
      message: `this route does not exist : ${req.originalUrl}`,
    });
  });

  //error handler
  app.use(errorHandler);
};

export default appConfig;
