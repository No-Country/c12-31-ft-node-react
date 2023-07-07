import { Router } from "express";
import { WalletController } from "../controllers/wallet.controller";
import {
  updateWalletValidator,
  updateWalletBalancePesosValidator,
  updateWalletBalanceDollarsValidator,
  updateWalletBalanceDlls2ArsValidator,
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
  "/balance/2dollars/:walletId",
  updateWalletBalanceDollarsValidator,
  WalletController.convertBalanceToDollars
);

router.put(
  "/balance/2ars/:walletId",
  updateWalletBalanceDlls2ArsValidator,
  WalletController.convertDllsToArs
);

export { router as walletRouter };
