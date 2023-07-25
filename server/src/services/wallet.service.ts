import { dbContext } from "config/database.config";
import Wallet from "models/wallet.model";
import Boom from "@hapi/boom";
import Decimal from "decimal.js";
import { TransactionService } from "./transaction.service";
import { DepositService } from "./deposit.service";
import { UserService } from "./user.service";
import { PayService } from "./pay.service";
export class WalletService {
  private static readonly walletRepository = dbContext.getRepository(Wallet);

  public static async create(): Promise<Wallet> {
    const cardNumber = `${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
      1000 + Math.random() * 9000
    )}-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    const cvv = Math.floor(100 + Math.random() * 900).toString();

    const expirationDate = `${Math.floor(1 + Math.random() * 12)}/${Math.floor(
      2021 + Math.random() * 5
    )}`;

    const wallet = await this.walletRepository.create({
      cardNumber,
      cvv,
      expirationDate,
    });

    await this.walletRepository.save(wallet);
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
    if (receiverId) {
      const walletSender = await UserService.findOne(senderId);
      const walletReceiver = await UserService.findOne(receiverId);
      if (!walletSender || !walletReceiver)
        throw Boom.notFound("Wallet not found");

      const balanceSender = new Decimal(walletSender.wallet.balancePesos);
      const balanceReceiver = new Decimal(walletReceiver.wallet.balancePesos);
      const amountDecimal = new Decimal(amount);

      const newBalanceReceiver = balanceReceiver.plus(amountDecimal);

      const newBalanceSender = balanceSender.minus(amountDecimal);

      await TransactionService.createTransaction({
        senderId: walletSender.wallet.id,
        receiverId: walletReceiver.wallet.id,
        amount: amountDecimal.toNumber(),
        receiverName: walletReceiver.name + " " + walletReceiver.lastname,
        senderName: walletSender.name + " " + walletSender.lastname,
      });

      const queryRunner = dbContext.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        await queryRunner.manager.update(
          Wallet,
          { id: walletReceiver.wallet.id },
          { balancePesos: newBalanceReceiver.toString() }
        );
        await queryRunner.manager.update(
          Wallet,
          { id: walletSender.wallet.id },
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
      const wallet = await this.walletRepository.findOneBy({
        id: senderId,
      });
      if (!wallet) throw Boom.notFound("Wallet not found");
      const balance = new Decimal(wallet.balancePesos);
      const amountDecimal = new Decimal(amount);
      const newBalance = balance.plus(amountDecimal);

      await DepositService.createDeposit({
        walletId: senderId,
        amount: amountDecimal.toNumber(),
      });

      const queryRunner = dbContext.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try {
        await queryRunner.manager.update(
          Wallet,
          { id: wallet.id },
          { balancePesos: newBalance.toString() }
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

  public static async findOne(id: string): Promise<Wallet> {
    const wallet = await this.walletRepository.findOneBy({ id });

    if (!wallet) throw Boom.notFound(`Wallet with id ${id} not found`);

    return wallet;
  }

  public static async payService(
    amount: number,
    walletId: string,
    serviceProvider: string
  ): Promise<void> {
    const wallet = await this.walletRepository.findOneBy({ id: walletId });
    if (!wallet) throw Boom.notFound("Wallet not found");
    const balance = new Decimal(wallet.balancePesos);
    const amountDecimal = new Decimal(amount);
    const newBalance = balance.minus(amountDecimal);

    await PayService.createPay({
      walletId: walletId,
      amount: amountDecimal.toNumber(),
      serviceProvider: serviceProvider,
    });

    const queryRunner = dbContext.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.update(
        Wallet,
        { id: wallet.id },
        { balancePesos: newBalance.toString() }
      );
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw Boom.internal("Failed to pay, please try again");
    } finally {
      await queryRunner.release();
    }
  }
}
