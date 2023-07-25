import { Decimal } from "decimal.js";
import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Transaction from "./transaction.model";
import { Deposit } from "./deposit.model";
import { Pay } from "./pay.model";

@Exclude()
@Entity()
class Wallet {
  @Expose()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Expose()
  @Column({ default: "" })
  cardNumber: string;

  @Expose()
  @Column({ default: "" })
  cvv: string;

  @Expose()
  @Column({ default: "" })
  expirationDate: string;

  @Expose()
  @Column({ type: "decimal", default: "2500" })
  balancePesos: Decimal;

  @Expose()
  @Column({ type: "decimal", default: "5" })
  balanceDollars: Decimal;

  @Expose()
  @OneToMany(() => Transaction, (transaction) => transaction.senderWallet, {
    eager: true,
  })
  @JoinColumn({ name: "senderId" })
  senderTransactions: Transaction[];

  @Expose()
  @OneToMany(() => Transaction, (transaction) => transaction.receiverWallet, {
    eager: true,
  })
  @JoinColumn({ name: "receiverId" })
  receiverTransactions: Transaction[];

  @Expose()
  @OneToMany(() => Deposit, (deposit) => deposit.wallet, {
    eager: true,
  })
  @JoinColumn({ name: "walletId" })
  deposits: Deposit[];

  @Expose()
  @OneToMany(() => Pay, (pay) => pay.wallet, {
    eager: true,
  })
  @JoinColumn({ name: "walletId" })
  pays: Pay[];

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Wallet;
