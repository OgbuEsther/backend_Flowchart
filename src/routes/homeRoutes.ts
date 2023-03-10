import { Router, Request, Response, NextFunction } from "express";

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response, next: NextFunction) => {});

// homeRouter.post()
