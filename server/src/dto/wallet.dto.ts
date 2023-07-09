import { Decimal } from "decimal.js";

export class WalletDto {
  id: string;

  balancePesos: Decimal;

  balanceDollars: Decimal;
}
