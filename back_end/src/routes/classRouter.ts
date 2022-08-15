import { Router } from "express";
import { newClass } from "../controllers/classController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.post("/class", validateToken, newClass);

export default organizerRouter;