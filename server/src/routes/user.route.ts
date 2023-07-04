import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/", UserController.findAll);
router.get("/:id", UserController.findOne);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
// router.delete("/user/:id", UserController.remove);

export { router as userRouter };
