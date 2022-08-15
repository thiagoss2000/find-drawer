import { Router } from "express";
import authRouter from "./authRouter.js";
import drawersRouter from "./drawersRoutes.js";
import classRouter from "./classRouter.js";
import typesRouter from "./typesRouter.js";
import unitRouter from "./unitRouter.js";
import subclassRouter from "./subclassRouter.js";
import groupRouter from "./groupRouter.js";
import tableRouter from "./tableRouter.js";
import organizerRouter from "./organizerRouter.js";

const router = Router();

router.use(authRouter);
router.use(drawersRouter);

router.use(typesRouter);
router.use(groupRouter);
router.use(classRouter);
router.use(subclassRouter);
router.use(unitRouter);
router.use(tableRouter);
router.use(organizerRouter);

export default router;