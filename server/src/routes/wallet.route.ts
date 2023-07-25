import { Router } from "express";
import { WalletController } from "controllers/wallet.controller";
import { TransactionController } from "controllers/transaction.controller";
import {
  depositPesosValidator,
  getWalletByIdValidator,
} from "validators/wallet.validator";

const router = Router();

router.post(
  "/transaction",
  depositPesosValidator,
  WalletController.depositPesos
);
router.get("/transaction", TransactionController.findAll);
router.get(
  "/transaction/:id",
  getWalletByIdValidator,
  WalletController.findOne
);
export { router as walletRouter };
