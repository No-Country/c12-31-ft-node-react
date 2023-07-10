/* eslint-disable prettier/prettier */
import { Router } from "express";
import { userRouter } from "./user.route";
import { walletRouter } from "./wallet.route";
import { authRouter } from "./auth.route";

const router = Router();

// NOTE: Puts al routers here
router.use("/user", userRouter);
router.use("/wallet", walletRouter);
router.use("/auth", authRouter);

export { router };
