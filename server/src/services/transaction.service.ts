import { dbContext } from "config/database.config";
import Transaction from "models/transaction.model";
import Boom from "@hapi/boom";

export class TransactionService {
  private static readonly transactionRepository =
    dbContext.getRepository(Transaction);

  public static async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = this.transactionRepository.create(transaction);
    return await this.transactionRepository.save(newTransaction);
  }

  public static async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }

  public static async findOne(id: string): Promise<Transaction> {
    const transaction = await this.transactionRepository.findOneBy({ id });

    if (!transaction)
      throw Boom.notFound(`Transaction with id ${id} not found`);

    return transaction;
  }
}
