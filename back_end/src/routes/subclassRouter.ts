import { Router } from "express";
import { newSubclass } from "../controllers/subclassController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.post("/subclass", validateToken, newSubclass);

export default organizerRouter;