import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { createUserValidator, updateUserValidator } from "src/validators/user.validator";

const router = Router();

router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);
router.post("/", createUserValidator, UserController.create);
router.put("/:id", updateUserValidator, UserController.update);
// router.delete("/user/:id", UserController.remove);

export { router as userRouter };
