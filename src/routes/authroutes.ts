import { Router } from "express";
import { register } from "../controller/usercontroller";
import { registerValidation } from "../middleware/validator/userValidation/userValidation";

const userRoutes = Router();

userRoutes.post("/register", registerValidation, register);

export default userRoutes;
