import { dbContext } from "config/database.config";
import Wallet from "models/wallet.model";

export class WalletService {
  private static readonly walletRepository = dbContext.getRepository(Wallet);

  public static async create(): Promise<Wallet> {
    const wallet = this.walletRepository.create();
    return wallet;
  }
}
