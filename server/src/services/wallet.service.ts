import { sequelize } from "src/config/sequelize.config";
import { UpdateWalletDto } from "src/dto/update-wallet.dto";
import Wallet from "src/models/wallet.model";
import { HttpError } from "src/types/http-error.type";

export class WalletService {
  private static readonly userRepository = sequelize.getRepository(Wallet);

  public static async create(
    userId: number,
    currency: string
  ): Promise<Wallet> {
    const wallet = await this.userRepository.create({ userId, currency });
    return wallet;
  }

  public static async findByUserId(userId: number): Promise<Wallet[]> {
    const wallet = await this.userRepository.findAll({
      where: { userId: userId },
    });
    if (!wallet) {
      throw new HttpError(404, "Wallet not found");
    }
    return wallet;
  }

  public static async findOne(walletId: number): Promise<Wallet> {
    const wallet = await this.userRepository.findByPk(walletId);
    if (!wallet) {
      throw new HttpError(404, "Wallet not found");
    }
    return wallet;
  }

  public static async updateBalancePesos(
    walletId: number,
    updateBalance: number
  ): Promise<Wallet> {
    const wallet = await this.findOne(walletId);
    wallet.balance_pesos = wallet.balance_pesos + updateBalance;
    await this.userRepository.update(wallet, {
      where: { id: walletId },
    });
    return wallet;
  }

  public static async updateBalanceDollars(
    walletId: number,
    updateBalance: number
  ): Promise<Wallet> {
    const wallet = await this.findOne(walletId);
    wallet.balance_dollars = wallet.balance_dollars + updateBalance;
    await this.userRepository.update(wallet, {
      where: { id: walletId },
    });
    return wallet;
  }

  public static async update(
    walletId: number,
    updateWalletDto: UpdateWalletDto
  ): Promise<Wallet> {
    const wallet = await this.findOne(walletId);
    await this.userRepository.update(updateWalletDto, {
      where: { id: walletId },
    });
    return wallet;
  }
}
