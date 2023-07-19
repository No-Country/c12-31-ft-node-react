import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
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

  @ManyToOne(() => Wallet, (wallet) => wallet.transactions)
  wallet: Wallet;

  @Expose()
  @Column("decimal")
  amount: number;

  @Expose()
  @Column("uuid")
  senderId: string;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Transaction;
