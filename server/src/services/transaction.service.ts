import { dbContext } from "config/database.config";
import Transaction from "models/transaction.model";
import { TransactionDto } from "../dto/create-transaction.dto";
import { WalletService } from "./wallet.service";
import Boom from "@hapi/boom";
import Decimal from "decimal.js";

export class TransactionService {
  private static readonly transactionRepository =
    dbContext.getRepository(Transaction);
  public static async createTransaction(TransactionDto: TransactionDto) {
    const walletSender = await WalletService.getWalletById(
      TransactionDto.senderId
    );
    if (new Decimal(walletSender.balancePesos).lessThanOrEqualTo(0))
      throw Boom.badRequest("Insufficient funds");
    const transaction = this.transactionRepository.create(TransactionDto);
    /*  console.log(transaction); */
    const amount = new Decimal(transaction.amount);
    await WalletService.depositPesos(
      transaction.senderId,
      transaction.receiverId,
      amount
    );
    await this.transactionRepository.save(transaction);
    /*  console.log(transaction); */
    return transaction;
  }
}
