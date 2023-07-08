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
  @Column({ length: 100 })
  name: string;

  @Expose()
  @Column({ length: 100 })
  lastname: string;

  @Expose()
  @Column({ length: 100 })
  address: string;

  @Expose()
  @Column({ unique: true })
  email: string;

  // NOTE: Enum type only supported by postgresql database
  @Expose()
  @Column({ type: "enum", enum: Role, default: Role.user })
  rol: Role;

  @Column()
  password: string;

  @Column({ default: true })
  active: boolean;

  @Expose()
  @OneToOne(() => Wallet)
  @JoinColumn()
  wallet: Relation<Wallet>;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updatedOn: Date;
}

export default User;
