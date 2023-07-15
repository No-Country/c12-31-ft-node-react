import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
const router = Router();

router.post("/transaction", TransactionController.create);
export { router as walletRouter };
