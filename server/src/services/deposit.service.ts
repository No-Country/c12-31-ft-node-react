import { dbContext } from "config/database.config";
import { Deposit } from "models/deposit.model";
import { depositDto } from "../dto/deposit.dto";
import { WalletService } from "./wallet.service";
import Decimal from "decimal.js";
import Wallet from "models/wallet.model";

export class DepositService {
  private static readonly depositRepository = dbContext.getRepository(Deposit);

  public static async createDeposit(depositDto: depositDto): Promise<Deposit> {
    const { walletId, amount } = depositDto;
    const wallet = await WalletService.getWalletById(walletId);

    const deposit = this.depositRepository.create({
      ...depositDto,
      wallet: wallet,
      walletId: wallet.id,
    });

    const queryRunner = dbContext.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(deposit);
      const walletBalance = new Decimal(wallet.balancePesos);
      const amountDecimal = new Decimal(amount);

      const newWalletBalance = walletBalance.plus(amountDecimal);

      await queryRunner.manager.update(
        Wallet,
        { id: wallet.id },
        { balancePesos: newWalletBalance.toString() }
      );

      await queryRunner.commitTransaction();
      return deposit;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
