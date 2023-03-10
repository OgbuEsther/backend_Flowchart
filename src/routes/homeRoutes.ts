import { Router, Request, Response, NextFunction } from "express";

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "view all set 06 students data 😘😘",
  });
});

export default homeRouter;
