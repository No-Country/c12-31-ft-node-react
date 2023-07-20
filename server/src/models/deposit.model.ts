//modelo para deposito de dinero

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
class Deposit {
  @Expose()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Expose()
  @Column("uuid")
  walletId: string;

  @ManyToOne(() => Wallet, (wallet) => wallet.deposits)
  @JoinColumn({ name: "walletId" })
  wallet: Wallet;

  @Expose()
  @Column("decimal")
  amount: number;

  @Expose()
  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export { Deposit };
