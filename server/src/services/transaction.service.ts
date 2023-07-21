import { dbContext } from "config/database.config";
import Transaction from "models/transaction.model";
import { TransactionDto } from "../dto/create-transaction.dto";
import { WalletService } from "./wallet.service";
import Boom from "@hapi/boom";
import Decimal from "decimal.js";
import Wallet from "models/wallet.model";

export class TransactionService {
  private static readonly transactionRepository =
    dbContext.getRepository(Transaction);

  public static async createTransaction(
    transactionDto: TransactionDto
  ): Promise<Transaction> {
    const { senderId, receiverId, amount } = transactionDto;

    const senderWallet = await WalletService.getWalletById(senderId);
    const receiverWallet = await WalletService.getWalletById(receiverId);

    if (
      new Decimal(senderWallet.balancePesos).lessThanOrEqualTo(0) ||
      new Decimal(senderWallet.balancePesos).lessThan(amount)
    ) {
      throw Boom.badRequest("Insufficient funds");
    }

    const transaction = this.transactionRepository.create({
      ...transactionDto,
      senderWallet: senderWallet,
      receiverWallet: receiverWallet,
      senderId: senderWallet.id,
    });

    const queryRunner = dbContext.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(transaction);
      const senderBalance = new Decimal(senderWallet.balancePesos);
      const receiverBalance = new Decimal(receiverWallet.balancePesos);
      const amountDecimal = new Decimal(amount);

      const newSenderBalance = senderBalance.minus(amountDecimal);
      const newReceiverBalance = receiverBalance.plus(amountDecimal);

      await queryRunner.manager.update(
        Wallet,
        { id: senderWallet.id },
        { balancePesos: newSenderBalance.toString() }
      );

      await queryRunner.manager.update(
        Wallet,
        { id: receiverWallet.id },
        { balancePesos: newReceiverBalance.toString() }
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw Boom.internal("Failed to create transaction, please try again");
    } finally {
      await queryRunner.release();
    }

    return transaction;
  }

  public static async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }
}
