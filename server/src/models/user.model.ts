import { Exclude, Expose } from "class-transformer";
import { DataTypes } from "sequelize";
import {
  AllowNull,
  CreatedAt,
  Default,
  Model,
  UpdatedAt,
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  HasOne,
  Unique,
} from "sequelize-typescript";
import Wallet from "./wallet.model";
export enum Rol {
  admin = "admin",
  user = "user",
}
@Exclude()
@Table
class User extends Model<User> {
  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  @Expose()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  name: string;

  @Expose()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  lastname: string;

  @Expose()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  address: string;

  @Expose()
  @AllowNull(false)
  @Unique
  @Column(DataTypes.STRING)
  email: string;

  @Expose()
  @Column(DataTypes.ENUM({ values: [Rol.admin, Rol.user] }))
  rol: Rol;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  password: string;

  @Default(true)
  @Column(DataTypes.BOOLEAN)
  active: boolean;

  @Expose()
  @HasOne(() => Wallet)
  wallet: Wallet;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

export default User;
