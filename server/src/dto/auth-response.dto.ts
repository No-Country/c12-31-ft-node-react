import { Type } from "class-transformer";
import User from "models/user.model";
import { UserDto } from "./user.dto";

export class AuthResponseDto {
  @Type(() => User)
  user: UserDto;

  access_token: string;
}
