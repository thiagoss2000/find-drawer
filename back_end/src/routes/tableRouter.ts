import { Router } from "express";
import { newTable } from "../controllers/tableController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.post("/table", validateToken, newTable);

export default organizerRouter;