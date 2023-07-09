import { WalletDto } from "./wallet.dto";

export interface UserDto {
  id: string;
  name: string;
  lastname: string;
  address: string;
  email: string;
  wallet: WalletDto;
}
