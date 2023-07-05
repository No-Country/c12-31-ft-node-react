import { Request, Response, NextFunction } from "express";
import { serializeResponse } from "../utils/serialize-response";
import { WalletService } from "../services/wallet.service";
import { UpdateWalletDto } from "../dto/update-wallet.dto";

export class WalletController {
  static async findByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = Number(req.params.userId);
      const wallet = await WalletService.findByUserId(userId);
      res.json(serializeResponse(wallet));
    } catch (error) {
      next(error);
    }
  }

  static async findOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const walletId = Number(req.params.walletId);
      const wallet = await WalletService.findOne(walletId);
      res.json(serializeResponse(wallet));
    } catch (error) {
      next(error);
    }
  }

  static async updateBalancePesos(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const walletId = Number(req.params.walletId);
      const updateBalance = Number(req.body.updateBalance);
      const wallet = await WalletService.updateBalancePesos(
        walletId,
        updateBalance
      );
      res.json(serializeResponse(wallet));
    } catch (error) {
      next(error);
    }
  }

  static async updateBalanceDollars(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const walletId = Number(req.params.walletId);
      const updateBalance = Number(req.body.updateBalance);
      const wallet = await WalletService.updateBalanceDollars(
        walletId,
        updateBalance
      );
      res.json(serializeResponse(wallet));
    } catch (error) {
      next(error);
    }
  }

  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const walletId = Number(req.params.walletId);
      const walletDto: UpdateWalletDto = req.body;
      const wallet = await WalletService.update(walletId, walletDto);
      res.json(serializeResponse(wallet));
    } catch (error) {
      next(error);
    }
  }
}
