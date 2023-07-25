export interface PayDto {
  walletId: string;
  amount: number;
  serviceProvider: string;
}

export type CreatePay = Pick<PayDto, "walletId" | "amount" | "serviceProvider">;
