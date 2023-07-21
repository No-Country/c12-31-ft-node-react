import { TransactionDto } from "./create-transaction.dto";

export type CreateTransaction = Pick<
  TransactionDto,
  "amount" | "senderId" | "receiverId"
>;
