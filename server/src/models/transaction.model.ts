/* eslint-disable prettier/prettier */
import { Exclude, Expose } from "class-transformer";
import { DataTypes } from "sequelize";
import {
  AllowNull,
  CreatedAt,
  Default,
  Model,
  UpdatedAt,
} from "sequelize-typescript";
import { AutoIncrement, Column, PrimaryKey, Table, ForeignKey } from "sequelize-typescript";
import Wallet from "./wallet.model"; 
@Exclude()
@Table
class Transaction extends Model<Transaction> {
  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  @Expose()
  @AllowNull(false)
  @Column(DataTypes.INTEGER)
  receiver: number;

  @ForeignKey(() => Wallet)
  @Column
  walletId: number; 

  @Expose()
  @Default(0)
  @AllowNull(false)
  @Column(DataTypes.DECIMAL)
  amount: number;

  @AllowNull(false)
  @Column(DataTypes.DATE)
  date: Date;

  @Column(DataTypes.INTEGER)
  sender: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

export default Transaction;
