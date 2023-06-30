import { Router } from "express";
import { itemRouter } from "./item.route";

const router = Router();

// NOTE: Puts al routers here
router.use(itemRouter);

export { router };
