import { dataSource } from "config/sequelize.config";
import { CreateUserDto } from "dto/create-user.dto";
import { UpdateUserDto } from "dto/update-user.dto";
import User from "models/user.model";
import { HttpError } from "types/http-error.type";
import { encrypt } from "utils/hash";

export class UserService {
  private static readonly userRepository = dataSource.getRepository(User);

  public static async create(createUserDto: CreateUserDto): Promise<User> {
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

  public static async findOne(id: string, all?: boolean): Promise<User> {
    //si all es true, devuelve todos los usuarios, si es false, devuelve solo los activos
    if (all) {
      const user = await this.userRepository.findOne({
        where: {
          id,
        },
        relations: {
          wallet: true,
        },
      });

      if (!user) {
        throw new HttpError(404, `User with id ${id} not found`);
      }

      return user;
    } else {
      const user = await this.userRepository.findOne({
        where: {
          id,
        },
        relations: {
          wallet: true,
        },
      });

      if (!user) {
        throw new HttpError(404, `User with id ${id} not found`);
      }

      return user;
    }
  }

  public static async update(
    id: string,
    updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepository.update(id, updateUserDto);
    return user;
  }

  public static async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: email, active: true },
    });

    if (!user) {
      throw new HttpError(404, "User not found");
    }
    // const passwordMatch = await compare(password, user.password);
    //
    // if (!passwordMatch) {
    //   throw new HttpError(400, "Invalid password");
    // }

    return user;
  }
}
