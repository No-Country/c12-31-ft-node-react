import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
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

  // @ForeignKey(() => User)
  @Column()
  userId: string;

  @Expose()
  @Column()
  currency: string;

  @Expose()
  @Column({ type: "money" })
  balance_pesos: number;

  @Expose()
  @Column({ type: "money" })
  balance_dollars: number;

  // @BelongsTo(() => User, 'id')
  // @Column({ length: 50 })
  // user: User;
  @OneToMany(() => Transaction, (transaction) => transaction.id)
  transactions: Relation<Transaction>[];

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default Wallet;
