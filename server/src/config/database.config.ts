import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from "./env.config";
import User from "models/user.model";
import Wallet from "models/wallet.model";
import Transaction from "models/transaction.model";
import { Deposit } from "models/deposit.model";

const { database } = config;

export const dbContext = new DataSource({
  type: "postgres",
  host: database.host,
  port: database.port,
  database: database.name,
  username: database.username,
  password: database.password,
  url: database.url,
  synchronize: true,
  entities: [User, Wallet, Transaction, Deposit],
  ssl: database.ssl,
});
