import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { logger } from "./logger.config";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.HOST,
    port: parseInt(process.env.DB_PORT, 10),
    models: [__dirname + "/../models/*.model.ts"],
    logging: logger.info.bind(logger),
    sync: { alter: true },
    repositoryMode: true,
  }
);
