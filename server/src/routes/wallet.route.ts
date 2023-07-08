import { WalletController } from "controllers/wallet.controller";
import { Router } from "express";
import { updateWalletBalancePesosValidator } from "validators/wallet.validator";

const router = Router();

router.put(
  "/balance/pesos/:walletId",
  updateWalletBalancePesosValidator,
  WalletController.updateBalancePesos
);

export { router as walletRouter };
