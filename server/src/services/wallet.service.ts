import { dbContext } from "config/database.config";
import Wallet from "models/wallet.model";
import mercadopago from "../config/mercadopago.config";
import Transaction from "models/transaction.model";
import { CreatePreferencePayload } from "dto/mp-dto";
export class WalletService {
  private static readonly walletRepository = dbContext.getRepository(Wallet);
  private static readonly transactionRepository =
    dbContext.getRepository(Transaction);

  public static async create(): Promise<Wallet> {
    const wallet = this.walletRepository.create();
    return wallet;
  }

  public static async createMercadoPagoPayment(
    senderId: string,
    amount: number
  ): Promise<any> {
    const wallet = await this.walletRepository.findOne({
      where: { id: senderId },
    });
    if (!wallet) {
      throw new Error("Wallet not found");
    }
    const transaction = this.transactionRepository.create();
    transaction.amount = amount;
    transaction.senderId = senderId;
    transaction.receiverId = senderId;
    transaction.date = new Date();
    transaction.creationDate = new Date();
    transaction.updatedOn = new Date();
    await this.transactionRepository.save(transaction);
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: "Deposit",
          unit_price: amount,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `localhost:3000/mp/success`,
        failure: `localhost:3000/mp/failure`,
        pending: `localhost:3000/mp/pending`,
      },
      auto_return: "approved",
    };
    const response = await mercadopago.preferences.create(preference);
    return response.body;
  }
}
