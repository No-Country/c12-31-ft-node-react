/* eslint-disable prettier/prettier */
import { Exclude, Expose } from "class-transformer";
import { DataTypes} from "sequelize";
import { AllowNull, CreatedAt, Default, Model, UpdatedAt, AutoIncrement, Column, PrimaryKey, Table, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import Transaction from "../models/transaction.model";
import User from "./user.model";
// NOTE: sequelize-typescript complains if column decorator is not at bottom of decorator stack

@Exclude()
@Table
class Wallet extends Model<Wallet> {
  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  @ForeignKey(()=>User)
  @Column(DataTypes.DECIMAL)
  userId:number;

  @Expose()
  @AllowNull(false)
  @Column(DataTypes.STRING)
  currency: string;

//Provisional
  @Default(0)
  @Column(DataTypes.DECIMAL)
  balance_pesos:number;
//Provisional
  @Default(0)
  @Column(DataTypes.DECIMAL)
  balance_dolars:number;

  @HasMany(() => Transaction)
  transactions: Transaction[];
  
  @BelongsTo(() => User,'id')
  user: User;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

export default Wallet;
