import { WalletDto } from "./wallet.dto";

export interface UserDto {
  id: string;
  name: string;
  lastname: string;
  country: string;
  email: string;
  wallet: WalletDto;
}
