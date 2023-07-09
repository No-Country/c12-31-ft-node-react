import { CreateUserDto } from "./create-user.dto";

export type ChangePasswordDto = Partial<
  Pick<CreateUserDto, "password" | "email">
>;
