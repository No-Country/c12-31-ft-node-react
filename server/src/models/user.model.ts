/* eslint-disable prettier/prettier */
import { Exclude, Expose } from "class-transformer";
import { DataTypes } from "sequelize";
import { AllowNull, CreatedAt, Default, Model, UpdatedAt, AutoIncrement, Column, PrimaryKey, Table, HasOne } from "sequelize-typescript";
import Wallet from "./wallet.model";
// NOTE: sequelize-typescript complains if column decorator is not at bottom of decorator stack
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
  email: string;

  @Expose()
  @Column(DataTypes.ENUM({values:[Rol.admin,Rol.user]}))
  rol: Rol; 

  @AllowNull(false)
  @Column(DataTypes.STRING)
  password: string;

  @Default(true)
  @Column(DataTypes.BOOLEAN)
  active:boolean;

  @HasOne(() => Wallet)
  wallet: Wallet;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

export default User;
