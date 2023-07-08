import { dataSource } from "config/sequelize.config";
import Wallet from "models/wallet.model";

export class WalletService {
  private static readonly walletRepository = dataSource.getRepository(Wallet);

  public static async create(
    userId: string,
    currency: string
  ): Promise<Wallet> {
    const wallet = await this.walletRepository.save({ currency });
    return wallet;
  }

  public static async updateBalancePesos(
    walletId: string,
    updateBalance: number
  ): Promise<void> {
    await this.walletRepository.update(
      { id: walletId },
      { balance_pesos: updateBalance }
    );
  }

  // public static async convertBalanceToDollars(
  //   walletId: number,
  //   amountToConvert: number
  // ): Promise<Wallet> {
  //   const wallet = await this.findOne(walletId);
  //
  //   if (wallet.balance_pesos >= amountToConvert) {
  //     wallet.balance_pesos = Number(wallet.balance_pesos) - amountToConvert;
  //     wallet.balance_dollars =
  //       Number(wallet.balance_dollars) + amountToConvert / 150;
  //     await wallet.save();
  //     return wallet;
  //   } else {
  //     throw new HttpError(400, "Saldo insuficiente en pesos");
  //   }
  // }

  // public static async convertBalanceToPesos(
  //   walletId: number,
  //   amountToConvert: number
  // ): Promise<Wallet> {
  //   const wallet = await this.findOne(walletId);
  //
  //   if (wallet.balance_dollars >= amountToConvert) {
  //     wallet.balance_dollars = Number(wallet.balance_dollars) - amountToConvert;
  //     wallet.balance_pesos =
  //       Number(wallet.balance_pesos) + amountToConvert * 150;
  //     await wallet.save();
  //     return wallet;
  //   } else {
  //     throw new HttpError(400, "Saldo insuficiente en dólares");
  //   }
  // }

  // public static async update(
  //   walletId: number,
  //   updateWalletDto: UpdateWalletDto
  // ): Promise<Wallet> {
  //   const wallet = await this.findOne(walletId);
  //   await this.walletRepository.update(updateWalletDto, {
  //     where: { id: walletId },
  //   });
  //   return wallet;
  // }
}
