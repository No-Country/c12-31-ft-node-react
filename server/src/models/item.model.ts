import { Exclude, Expose } from "class-transformer";
import { DataTypes } from "sequelize";
import { AllowNull, CreatedAt, Model, UpdatedAt } from "sequelize-typescript";
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

export default Item;
