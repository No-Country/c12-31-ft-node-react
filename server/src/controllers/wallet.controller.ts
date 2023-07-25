import { WalletService } from "services/wallet.service";
import { NextFunction, Response } from "express";
import { RequestWithTypedBody } from "types/custom-request.type";
import { CreateTransaction } from "dto/transaction.dto";
import { CreatePay } from "dto/pay.dto";
export class WalletController {
  static async depositPesos(
    req: RequestWithTypedBody<CreateTransaction>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await WalletService.depositPesos(
        req.body.amount,
        req.body.senderId,
        req.body.receiverId
      );
      res.status(200).json({ message: "Deposit successful" });
    } catch (error) {
      next(error);
    }
  }
  static async findOne(
    { params }: RequestWithTypedBody<CreateTransaction>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const wallet = await WalletService.getWalletById(params.id);
      res.status(200).json(wallet);
    } catch (error) {
      next(error);
    }
  }

  static async payService(
    req: RequestWithTypedBody<CreatePay>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await WalletService.payService(
        req.body.amount,
        req.body.walletId,
        req.body.serviceProvider
      );
      res.status(200).json({ message: "Payment successful" });
    } catch (error) {
      next(error);
    }
  }
}
