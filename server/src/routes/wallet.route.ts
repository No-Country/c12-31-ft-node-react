import { Router } from "express";
import { WalletController } from "../controllers/wallet.controller";
import { TransactionController } from "controllers/transaction.controller";

const router = Router();

router.post("/adding", WalletController.createMercadoPagoPayment);
router.get("/transactions", TransactionController.findAll);

export { router as walletRouter };
