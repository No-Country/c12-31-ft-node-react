import { Router } from "express";
import { WalletController } from "controllers/wallet.controller";
const router = Router();

router.post("/transaction", WalletController.depositPesos);
export { router as walletRouter };
