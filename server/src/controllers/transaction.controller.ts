import { NextFunction, Response } from "express";
import { serializeResponse } from "utils/serialize-response";
import { TransactionService } from "services/transaction.service";
import { TransactionDto } from "../dto/create-transaction.dto";
import { RequestWithTypedBody } from "types/custom-request.type";

export class TransactionController {
  public static async create(
    req: RequestWithTypedBody<TransactionDto>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const transaction = await TransactionService.createTransaction(req.body);
      res.json(serializeResponse(transaction));
    } catch (error) {
      next(error);
    }
  }
}
