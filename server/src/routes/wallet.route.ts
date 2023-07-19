import { Router } from "express";
import { WalletController } from "controllers/wallet.controller";
import { TransactionController } from "controllers/transaction.controller";
const router = Router();

router.post("/transaction", WalletController.depositPesos);
router.get("/transaction", TransactionController.findAll);
router.get("/transaction/:id", WalletController.findOne);
export { router as walletRouter };
