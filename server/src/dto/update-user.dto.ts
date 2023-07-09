import { CreateUserDto } from "./create-user.dto";

export type ChangePasswordDto = Pick<CreateUserDto, "password" | "email">;
