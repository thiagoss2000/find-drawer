import { Router } from "express";
import { newUnit } from "../controllers/unitController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.post("/unit", validateToken, newUnit);

export default organizerRouter;