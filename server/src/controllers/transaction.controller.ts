import { NextFunction, Request, Response } from "express";
import { serializeResponse } from "utils/serialize-response";
import { TransactionService } from "services/transaction.service";

export class TransactionController {
  public static async findAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const transactions = await TransactionService.findAll();
      res.json(serializeResponse(transactions));
    } catch (error) {
      next(error);
    }
  }
}
