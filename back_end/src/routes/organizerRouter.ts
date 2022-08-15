import { Router } from "express";
import { searchTable } from "../controllers/organizerController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const organizerRouter = Router();

organizerRouter.get("/table", validateToken, searchTable);

export default organizerRouter;