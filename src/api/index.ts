import { Router } from "express";
import homeRouter from "../routes/homeRoutes";

const router = Router();

router.get("/", homeRouter);

export default router;
