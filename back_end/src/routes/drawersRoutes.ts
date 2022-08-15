import { Router } from "express";
import { postData, searchDrawer, searchDrawerGroup, searchDrawerTable, searchFew, updateDrawer } from "../controllers/drawersController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { createDrawerSchema, updateDrawerSchema } from "../schemas/drawersSchema.js";

const drawersRouter = Router();

drawersRouter.post("/drawer", validateToken, validateSchema(createDrawerSchema), postData);
drawersRouter.get("/drawer", validateToken, searchDrawer);
drawersRouter.get("/drawer/group", validateToken, searchDrawerGroup);
drawersRouter.get("/drawer/table", validateToken, searchDrawerTable);
drawersRouter.get("/few", validateToken, searchFew);
drawersRouter.put("/drawer", validateToken, validateSchema(updateDrawerSchema), updateDrawer);

export default drawersRouter;