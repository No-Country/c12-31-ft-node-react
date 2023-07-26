import { dbContext } from "config/database.config";
import { UserService } from "./user.service";
import Boom from "@hapi/boom";
import Decimal from "decimal.js";
import Wallet from "models/wallet.model";
import { Pay } from "models/pay.model";
import { PayDto } from "dto/pay.dto";

export class PayService {
  private static readonly payRepository = dbContext.getRepository(Pay);

  public static async createPay(payDto: PayDto): Promise<Pay> {
    const { senderId, amount, serviceProvider } = payDto;

    const wallet = await UserService.findOne(senderId);
    if (!wallet) throw Boom.notFound("Wallet not found");

    const pay = this.payRepository.create({
      ...payDto,
      wallet: wallet.wallet,
      senderId: wallet.wallet.id,
      serviceProvider: serviceProvider,
    });

    const queryRunner = dbContext.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(pay);
      const walletBalance = new Decimal(wallet.wallet.balancePesos);
      const amountDecimal = new Decimal(amount);

      const newWalletBalance = walletBalance.minus(amountDecimal);

      await queryRunner.manager.update(
        Wallet,
        { id: wallet.wallet.id },
        { balancePesos: newWalletBalance.toString() }
      );

      await queryRunner.commitTransaction();
      return pay;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
