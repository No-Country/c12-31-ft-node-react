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
  wallet: Relation<Wallet>;

  @Expose()
  @Column("money")
  amount: number;

  @Column("date")
  date: Date;

  @Column("uuid")
  senderId: string;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Transaction;
