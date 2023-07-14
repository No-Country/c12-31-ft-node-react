import { dbContext } from "config/database.config";
import Wallet from "models/wallet.model";
import mercadopago from "../config/mercadopago.config";
import Transaction from "models/transaction.model";
import { CreatePreferencePayload } from "dto/mp-dto";
import Decimal from "decimal.js";
import { notFound } from "@hapi/boom";
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
      throw notFound(`Wallet with id ${senderId} does not exist`);
    }
    //crear la transaccion en la base de datos y guardarla en la relacion de wallet con transacciones
    const transaction = this.transactionRepository.create({
      amount,
      senderId,
      receiverId: senderId,
      date: new Date(),
    });
    await this.transactionRepository.save(transaction);
    // const preference: CreatePreferencePayload = {
    //   items: [
    //     {
    //       title: "Deposit",
    //       unit_price: amount,
    //       quantity: 1,
    //     },
    //   ],
    //   back_urls: {
    //     success: `localhost:3000/mp/success`,
    //     failure: `localhost:3000/mp/failure`,
    //     pending: `localhost:3000/mp/pending`,
    //   },
    //   auto_return: "approved",
    // };
    // const response = await mercadopago.preferences.create(preference);
    const newBalance = new Decimal(wallet.balancePesos).add(amount);
    await this.walletRepository.save({
      ...wallet,
      balancePesos: newBalance.toString(),
    });

    return { mensaje: "Dinero depositado con exito", transaction };
  }

  public static async findOne(id: string): Promise<Wallet> {
    const wallet = await this.walletRepository.findOneBy({ id });

    if (!wallet) throw notFound(`Wallet with id ${id} does not exist`);

    return wallet;
  }
}
