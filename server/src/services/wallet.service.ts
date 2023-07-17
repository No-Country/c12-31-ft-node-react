import { dbContext } from "config/database.config";
import Wallet from "models/wallet.model";
import Boom from "@hapi/boom";
import Decimal from "decimal.js";
export class WalletService {
  private static readonly walletRepository = dbContext.getRepository(Wallet);

  public static async create(): Promise<Wallet> {
    const wallet = this.walletRepository.create();
    return wallet;
  }
  public static async getWalletById(id: string): Promise<Wallet> {
    const wallet = await this.walletRepository.findOneBy({ id });
    if (!wallet) throw Boom.notFound("Wallet not found");
    return wallet;
  }
  public static async depositPesos(
    senderId: string,
    reciverId: string,
    amount: Decimal
  ): Promise<void> {
    const walletSender = await this.walletRepository.findOneBy({
      id: senderId,
    });
    const walletReciver = await this.walletRepository.findOneBy({
      id: reciverId,
    });
    if (!walletSender || !walletReciver)
      throw Boom.notFound("Wallet not found");
    const balancePesos = new Decimal(walletSender.balancePesos);
    const amountDecimal = new Decimal(amount);
    const newBalanceReciver = balancePesos.plus(amountDecimal);
    const newBalanceSender = balancePesos.sub(amountDecimal);
    /* console.log(newBalanceReciver);
    console.log(newBalanceSender); */
    const queryRunner = dbContext.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(
        Wallet,
        { id: walletReciver.id },
        { balancePesos: newBalanceReciver.toString() }
      );
      await queryRunner.manager.update(
        Wallet,
        { id: walletSender.id },
        { balancePesos: newBalanceSender.toString() }
      );
      await queryRunner.commitTransaction();
    } catch (error) {
      /* console.log(error); */
      await queryRunner.rollbackTransaction();
      throw Boom.internal("Failed to deposit, please try again");
    } finally {
      await queryRunner.release();
    }
  }
}
