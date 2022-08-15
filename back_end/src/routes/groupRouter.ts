import { Router } from "express";
import { newGroup } from "../controllers/groupController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.post("/group", validateToken, newGroup);

export default organizerRouter;