import { Router } from "express";
import { WalletController } from "controllers/wallet.controller";
import { VerifyToken } from "middleware/verifyToken.middleware";
import {
  depositPesosValidator,
  getWalletByIdValidator,
  payServiceValidator,
} from "validators/wallet.validator";

const router = Router();

router.post(
  "/transaction",
  depositPesosValidator,
  VerifyToken,
  WalletController.depositPesos
);
router.get(
  "/transaction/:id",
  getWalletByIdValidator,
  VerifyToken,
  WalletController.findOne
);
router.post(
  "/transaction/pay",
  payServiceValidator,
  VerifyToken,
  WalletController.payService
);
export { router as walletRouter };
