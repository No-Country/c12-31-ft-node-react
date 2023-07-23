import { Router } from "express";
import { WalletController } from "controllers/wallet.controller";
import { TransactionController } from "controllers/transaction.controller";
import { VerifyToken } from "middleware/verifyToken.middleware";
const router = Router();

router.post("/transaction", VerifyToken, WalletController.depositPesos);
router.get("/transaction", VerifyToken, TransactionController.findAll);
router.get("/transaction/:id", WalletController.findOne);
export { router as walletRouter };
