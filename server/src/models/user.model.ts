import { Exclude, Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from "typeorm";
import { Role } from "types/role.type";
import Wallet from "./wallet.model";

@Exclude()
@Entity()
class User {
  @Expose()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Expose()
  @Column({ length: 100, update: false })
  name: string;

  @Expose()
  @Column({ length: 100, update: false })
  lastname: string;

  @Expose()
  @Column({ length: 100 })
  country: string;

  @Expose()
  @Column({ unique: true, update: false })
  email: string;

  // NOTE: Enum type only supported by postgresql database
  @Column({ type: "enum", enum: Role, default: Role.user })
  rol: Role;

  @Column()
  password: string;

  @Column({ default: true })
  active: boolean;

  @Expose()
  @OneToOne(() => Wallet, {
    eager: true,
    nullable: false,
  })
  @JoinColumn()
  wallet: Relation<Wallet>;

  @CreateDateColumn({ update: false })
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default User;
