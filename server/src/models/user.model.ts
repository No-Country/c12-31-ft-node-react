/* eslint-disable prettier/prettier */
import { Exclude, Expose } from "class-transformer";
import { DataTypes } from "sequelize";
import { AllowNull, CreatedAt, Default, Model, UpdatedAt } from "sequelize-typescript";
import { AutoIncrement, Column, PrimaryKey, Table } from "sequelize-typescript";

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
  correo: string;

  @Expose()
  @Column(DataTypes.ENUM)
  rol: Rol;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  passsword: string;

  @Default(true)
  @Column(DataTypes.BOOLEAN)
  active:boolean;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}

export default User;
