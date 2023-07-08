import { Request, Response, NextFunction } from "express";
import { WalletService } from "services/wallet.service";
import { serializeResponse } from "utils/serialize-response";

export class WalletController {
  static async updateBalancePesos(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const walletId = req.params.walletId;
      const updateBalance = req.body.updateBalance;
      const wallet = await WalletService.updateBalancePesos(
        walletId,
        updateBalance
      );
      res.json(serializeResponse(wallet));
    } catch (error) {
      next(error);
    }
  }
}
