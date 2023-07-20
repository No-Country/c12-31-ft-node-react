import { Decimal } from "decimal.js";
import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import Transaction from "./transaction.model";

@Exclude()
@Entity()
class Wallet {
  @Expose()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Expose()
  @Column({ type: "decimal", default: 0 })
  balancePesos: Decimal;

  @Expose()
  @Column({ type: "decimal", default: 0 })
  balanceDollars: Decimal;

  @Expose()
  @OneToMany(() => Transaction, (transaction) => transaction.senderWallet, {
    eager: true,
  })
  @JoinColumn({ name: "senderId" }) // Foreign key column for sender
  senderTransactions: Transaction[];

  @Expose()
  @OneToMany(() => Transaction, (transaction) => transaction.receiverWallet, {
    eager: true,
  })
  @JoinColumn({ name: "receiverId" }) // Foreign key column for receiver
  receiverTransactions: Transaction[];

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Wallet;
