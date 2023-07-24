import { UserController } from "controllers/user.controller";
import { Router } from "express";
import { idValidator, updateUserValidator } from "validators/user.validator";

const router = Router();

router.get("/:id", idValidator, UserController.findOne);
router.put(
  "/resetpassword",
  updateUserValidator,
  UserController.changePassword
);

export { router as userRouter };
