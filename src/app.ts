import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

//creating our application
const appConfig = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"));
};
