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
class Pay {
  @Expose()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Expose()
  @Column("uuid")
  senderId: string;

  @ManyToOne(() => Wallet, (wallet) => wallet.pays)
  @JoinColumn({ name: "senderId" })
  wallet: Wallet;

  @Expose()
  @Column("decimal")
  amount: number;

  @Expose()
  @Column("varchar")
  serviceProvider: string;

  @Expose()
  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export { Pay };
