import { Router } from "express";
import { postData, searchDrawer, searchFew, updateDrawer } from "../controllers/drawersController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const drawersRouter = Router();

drawersRouter.post("/drawer", validateToken, postData);
drawersRouter.get("/drawer", validateToken, searchDrawer);
drawersRouter.get("/few", validateToken, searchFew);
drawersRouter.put("/drawer", validateToken, updateDrawer);

export default drawersRouter;