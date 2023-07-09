import Boom from "@hapi/boom";
import { AuthDto } from "dto/auth.dto";
import { CreateUserDto } from "dto/create-user.dto";
import jwt from "jsonwebtoken";
import { compare } from "utils/hash";
import { UserService } from "./user.service";
import { config } from "config/env.config";
import { AuthResponseDto } from "dto/auth-response.dto";
import { JwtPayload } from "types/jwt-payload.type";

export class AuthService {
  public static async register(createUserDto: CreateUserDto) {
    const existingUser = await UserService.findOneByEmail(createUserDto.email);

    if (existingUser) {
      throw Boom.badRequest(
        `User with email ${createUserDto.email} already exist!`
      );
    }

    const user = await UserService.create(createUserDto);
    const access_token = this.signToken({ sub: user.id });
    // TODO: this could be refactorized writing an AuthResponseDto using class-transformer
    return {
      user: user,
      access_token,
    };
  }

  public static async login({ email, password }: AuthDto) {
    const user = await UserService.findOneByEmail(email);

    if (!user || !(await compare(password, user.password)))
      throw Boom.badRequest("Invalid username or password");

    const access_token = this.signToken({ sub: user.id });
    // TODO: this could be refactorized writing an AuthResponseDto using class-transformer
    return {
      user,
      access_token,
    };
  }

  private static signToken(payload: JwtPayload): string {
    return jwt.sign(payload, config.jwt.secret, {
      expiresIn: config.jwt.expires,
    });
  }
}
