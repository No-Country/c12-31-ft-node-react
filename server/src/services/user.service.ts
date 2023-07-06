import { sequelize } from "src/config/sequelize.config";
import { CreateUserDto } from "src/dto/create-user.dto";
import { UpdateUserDto } from "src/dto/update-user.dto";
import User from "src/models/user.model";
import { HttpError } from "src/types/http-error.type";
import { encrypt, compare } from "../utils/hash";

export class UserService {
  private static readonly userRepository = sequelize.getRepository(User);

  public static async create(createUserDto: CreateUserDto): Promise<User> {
    const passwordHash = await encrypt(createUserDto.password);
    createUserDto.password = passwordHash;
    const user = await this.userRepository.create(createUserDto);
    return user;
  }

  public static async findAll(all?: boolean): Promise<User[]> {
    //si all es true, devuelve todos los usuarios, si es false, devuelve solo los activos
    if (all) {
      return await this.userRepository.findAll();
    } else {
      return await this.userRepository.findAll({ where: { active: true } });
    }
  }

  public static async findOne(id: number, all?: boolean): Promise<User> {
    //si all es true, devuelve todos los usuarios, si es false, devuelve solo los activos
    if (all) {
      const user = await this.userRepository.findByPk(id, {
        include: "wallet",
      });
      if (!user) {
        throw new HttpError(404, "User not found");
      }
      return user;
    } else {
      const user = await this.userRepository.findOne({
        where: { id: id, active: true },
        include: "wallet",
      });
      if (!user) {
        throw new HttpError(404, "User not found");
      }
      return user;
    }
  }

  public static async update(
    id: number,
    updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.findOne(id);
    await this.userRepository.update(updateUserDto, {
      where: { id: id },
    });
    return user;
  }
  /* public static async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  } */
  public static async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email: email, active: true },
    });
    if (!user) {
      throw new HttpError(404, "User not found");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new HttpError(400, "Invalid password");
    }
    return user;
  }
}
