import { dbContext } from "config/database.config";
import { CreateUserDto } from "dto/create-user.dto";
import { ChangePasswordDto } from "dto/update-user.dto";
import User from "models/user.model";
import { HttpError } from "types/http-error.type";
import { encrypt } from "utils/hash";

export class UserService {
  private static readonly userRepository = dbContext.getRepository(User);

  public static async create(createUserDto: CreateUserDto): Promise<User> {
    // TODO: create wallet
    const passwordHash = await encrypt(createUserDto.password);
    createUserDto.password = passwordHash;
    const user = await this.userRepository.save(createUserDto);

    return user;
  }

  public static async findAll(status?: boolean): Promise<User[]> {
    if (status === null) {
      return await this.userRepository.find();
    } else {
      return await this.userRepository.findBy({ active: status });
    }
  }

  public static async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        wallet: true,
      },
    });

    if (!user) throw new HttpError(404, `User with id ${id} not found`);

    return user;
  }

  public static async changePassword(
    email: string,
    password: string
  ): Promise<string> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user)
      throw new HttpError(404, `User with email ${email} does not exist`);

    await this.userRepository.update(user.id, { password });

    return "Password updated successfully";
  }
}
