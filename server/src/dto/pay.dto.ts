export interface PayDto {
  senderId: string;
  amount: number;
  serviceProvider: string;
}

export type CreatePay = Pick<PayDto, "senderId" | "amount" | "serviceProvider">;
