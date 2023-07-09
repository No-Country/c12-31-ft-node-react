import Boom from "@hapi/boom";
import { dbContext } from "config/database.config";
import { CreateUserDto } from "dto/create-user.dto";
import { ChangePasswordDto } from "dto/update-user.dto";
import User from "models/user.model";
import { encrypt } from "utils/hash";
import { WalletService } from "./wallet.service";
import { logger } from "config/logger.config";

export class UserService {
  private static readonly userRepository = dbContext.getRepository(User);

  public static async create(createUserDto: CreateUserDto): Promise<User> {
    const passwordHash = await encrypt(createUserDto.password);
    createUserDto.password = passwordHash;

    const user = this.userRepository.create(createUserDto);
    const wallet = await WalletService.create();

    const queryRunner = dbContext.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    // TODO: test this
    try {
      await queryRunner.manager.save(wallet);

      user.wallet = wallet;
      await queryRunner.manager.save(user);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      logger.error(error);
      throw Boom.internal("Failed to create user, please try again");
    } finally {
      await queryRunner.release();
      return user;
    }
  }

  public static async findAll(status?: boolean): Promise<User[]> {
    if (status === null) {
      return await this.userRepository.find();
    } else {
      return await this.userRepository.findBy({ active: status });
    }
  }

  public static async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw Boom.notFound(`User with id ${id} not found`);

    return user;
  }

  public static async changePassword({
    email,
    password,
  }: ChangePasswordDto): Promise<string> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) throw Boom.notFound(`User with email ${email} does not exist`);

    const hashPassword = await encrypt(password);
    await this.userRepository.update(user.id, { password: hashPassword });

    return "Password updated successfully";
  }
}
