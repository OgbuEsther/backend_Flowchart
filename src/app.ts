import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/error";

//creating our application
const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    //error handler
    .use(errorHandler);
};

export default appConfig;
