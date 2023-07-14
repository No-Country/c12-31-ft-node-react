import { Router } from "express";
import { WalletController } from "../controllers/wallet.controller";
import { TransactionController } from "controllers/transaction.controller";
import { createMercadoPagoPaymentValidator } from "validators/wallet.validator";

const router = Router();

router.post(
  "/adding",
  createMercadoPagoPaymentValidator,
  WalletController.createMercadoPagoPayment
);
router.get("/:id", WalletController.findOne);
router.get("/transactions", TransactionController.findAll);

export { router as walletRouter };
