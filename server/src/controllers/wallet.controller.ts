import { WalletService } from "services/wallet.service";
import { NextFunction, Response } from "express";
import { RequestWithTypedBody } from "types/custom-request.type";
import { CreateTransaction } from "dto/transaction.dto";
export class WalletController {
  static async depositPesos(
    { body }: RequestWithTypedBody<CreateTransaction>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await WalletService.depositPesos(
        body.amount,
        body.senderId,
        body.receiverId
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
}
