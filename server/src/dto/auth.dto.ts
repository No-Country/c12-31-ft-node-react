import { CreateUserDto } from "./create-user.dto";

export type AuthDto = Pick<CreateUserDto, "email" | "password">;
