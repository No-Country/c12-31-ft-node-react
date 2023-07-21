import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Wallet from "./wallet.model";

@Exclude()
@Entity()
class Transaction {
  @Expose()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Expose()
  @Column("uuid")
  receiverId: string;

  @Expose()
  @Column("uuid")
  senderId: string;
  @Expose()
  @Column({ default: "" })
  receiverName: string;

  @Expose()
  @Column({ default: "" })
  senderName: string;

  @ManyToOne(() => Wallet, (wallet) => wallet.senderTransactions)
  @JoinColumn({ name: "senderId" })
  senderWallet: Wallet;

  @ManyToOne(() => Wallet, (wallet) => wallet.receiverTransactions)
  @JoinColumn({ name: "receiverId" })
  receiverWallet: Wallet;

  @Expose()
  @Column("decimal")
  amount: number;

  @Expose()
  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Transaction;
