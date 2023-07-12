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

  @OneToMany(() => Transaction, (transaction) => transaction.id)
  transactions: Relation<Transaction>[];

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Wallet;
