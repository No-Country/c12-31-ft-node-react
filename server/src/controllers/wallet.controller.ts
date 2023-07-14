import { NextFunction, Request, Response } from "express";
import { serializeResponse } from "utils/serialize-response";
import { WalletService } from "../services/wallet.service";

export class WalletController {
  static async createMercadoPagoPayment(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const senderId = req.body.senderId;
      const amount = Number(req.body.amount);
      const payment = await WalletService.createMercadoPagoPayment(
        senderId,
        amount
      );
      res.json(serializeResponse(payment));
    } catch (error) {
      next(error);
    }
  }
}
