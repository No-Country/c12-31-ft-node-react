import { AuthController } from "controllers/auth.controller";
import { Router } from "express";
import { createUserValidator } from "validators/user.validator";

const router = Router();

router.post("/login", AuthController.login);
router.post("/register", createUserValidator, AuthController.register);

export { router as authRouter };
