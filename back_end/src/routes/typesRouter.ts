import { Router } from "express";
import { newType } from "../controllers/typeController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.post("/type", validateToken, newType);

export default organizerRouter;