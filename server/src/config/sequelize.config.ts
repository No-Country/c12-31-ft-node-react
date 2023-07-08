import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "./env.config";
import User from "models/user.model";
import Wallet from "models/wallet.model";
import Transaction from "models/transaction.model";

const { database } = config;

export const dataSource = new DataSource({
  type: "postgres",
  host: database.host,
  port: database.port,
  database: database.name,
  username: database.username,
  password: database.password,
  synchronize: true,
  entities: [User, Wallet, Transaction],
});
