import { dbContext } from "config/database.config";
import Wallet from "models/wallet.model";
import Boom from "@hapi/boom";
import Decimal from "decimal.js";
import { TransactionService } from "./transaction.service";
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
    amount: number,
    senderId: string,
    receiverId?: string
  ): Promise<void> {
    const walletSender = await this.walletRepository.findOneBy({
      id: senderId,
    });

    if (!walletSender) {
      throw Boom.notFound("Sender's wallet not found");
    }

    const balanceSender = new Decimal(walletSender.balancePesos);
    const amountDecimal = new Decimal(amount);

    if (receiverId) {
      const walletReceiver = await this.walletRepository.findOneBy({
        id: receiverId,
      });

      if (!walletReceiver) {
        throw Boom.notFound("Receiver's wallet not found");
      }

      const balanceReceiver = new Decimal(walletReceiver.balancePesos);
      const newBalanceReceiver = balanceReceiver.plus(amountDecimal);
      const newBalanceSender = balanceSender.minus(amountDecimal);

      await TransactionService.createTransaction({
        senderId,
        receiverId,
        amount: amountDecimal.toNumber(),
      });

      const queryRunner = dbContext.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        await queryRunner.manager.update(
          Wallet,
          { id: walletReceiver.id },
          { balancePesos: newBalanceReceiver.toString() }
        );
        await queryRunner.manager.update(
          Wallet,
          { id: walletSender.id },
          { balancePesos: newBalanceSender.toString() }
        );

        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw Boom.internal("Failed to deposit, please try again");
      } finally {
        await queryRunner.release();
      }
    } else {
      // If receiverId is not provided, only update the sender's wallet
      const newBalanceSender = balanceSender.plus(amountDecimal);

      await TransactionService.createTransaction({
        senderId,
        receiverId: senderId,
        amount: amountDecimal.toNumber(),
      });

      const queryRunner = dbContext.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        await queryRunner.manager.update(
          Wallet,
          { id: walletSender.id },
          { balancePesos: newBalanceSender.toString() }
        );

        await queryRunner.commitTransaction();
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw Boom.internal("Failed to deposit, please try again");
      } finally {
        await queryRunner.release();
      }
    }
  }
}
