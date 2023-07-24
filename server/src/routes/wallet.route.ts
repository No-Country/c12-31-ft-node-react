import { Router } from "express";
import { WalletController } from "controllers/wallet.controller";
import { VerifyToken } from "middleware/verifyToken.middleware";
const router = Router();

router.post("/transaction", VerifyToken, WalletController.depositPesos);
router.get("/transaction/:id", VerifyToken, WalletController.findOne);
export { router as walletRouter };
