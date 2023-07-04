import { Exclude, Expose } from "class-transformer";
import { DataTypes } from "sequelize";
import { AllowNull, CreatedAt, Default, Model, UpdatedAt } from "sequelize-typescript";
import { AutoIncrement, Column, PrimaryKey, Table } from "sequelize-typescript";

// NOTE: sequelize-typescript complains if column decorator is not at bottom of decorator stack
@Exclude()
@Table
class Item extends Model<Item> {
  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  @Expose()
  @AllowNull(false)
  @Column
  name: string;

  @Expose()
  @Column
  description: string;

  @Expose()
  @AllowNull(false)
  @Column(DataTypes.FLOAT)
  price: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

@Table
class User extends  Model<User>{
  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  @Expose()
  @AllowNull(false)
  @Column
  name: string;

  @Expose()
  @AllowNull(false)
  @Column
  email: string;

  @Expose()
  @AllowNull(false)
  @Column
  password: string;

  @Expose()
  @Default(true)
  @Column
  isActive: boolean;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;


}

@Table
class Wallet extends Model<Wallet>{
  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  
  @Expose()
  @AllowNull(false)
  @Column
  currency: string;

  @Expose()
  @AllowNull(false)
  @Column
  balance: number;

  @Expose()
  @AllowNull(false)
  @Column
  userId: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}

@Table
class Movement extends Model<Movement>{

  @Expose()
  @PrimaryKey
  @AutoIncrement
  @Column(DataTypes.INTEGER)
  id: number;

  @Expose()
  @AllowNull(false)
  @Column
  sender: string;

  @Expose()
  @AllowNull(false)
  @Column
  receiver: string;

  @Expose()
  @AllowNull(false)
  @Column
  amount: number;

  @Expose()
  @AllowNull(false)
  @Column
  currency: string;

  @Expose()
  @AllowNull(false)
  @Column
  type: string;

  @Expose()
  @AllowNull(false)
  @Column
  walletId: number;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

}


User.hasOne(Wallet, {foreignKey: 'userId'});
Wallet.belongsTo(User, {foreignKey: 'userId'});
Wallet.hasMany(Movement, {foreignKey: 'walletId'});
Movement.belongsTo(Wallet, {foreignKey: 'walletId'});


export { Item, User, Wallet };




