/* eslint-disable prettier/prettier */
import { Router } from "express";
import { userRouter } from "./user.route";

const router = Router();

// NOTE: Puts al routers here
router.use("/users", userRouter);

export { router };
