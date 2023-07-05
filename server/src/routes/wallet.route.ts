import { Router } from "express";
import { WalletController } from "../controllers/wallet.controller";
import {
  updateWalletValidator,
  updateWalletBalancePesosValidator,
  updateWalletBalanceDollarsValidator,
} from "../validators/wallet.validator";

const router = Router();

router.get("/:userId", WalletController.findByUserId);
router.get("/:walletId", WalletController.findOne);
router.put("/:walletId", updateWalletValidator, WalletController.update);
router.put(
  "/balance/pesos/:walletId",
  updateWalletBalancePesosValidator,
  WalletController.updateBalancePesos
);
router.put(
  "/balance/dollars/:walletId",
  updateWalletBalanceDollarsValidator,
  WalletController.updateBalanceDollars
);

export { router as walletRouter };
