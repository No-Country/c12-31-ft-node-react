/* eslint-disable prettier/prettier */
import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { logger } from "./logger.config";

export const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  models: [__dirname + "/../models/*.model.ts"],
  logging: logger.info.bind(logger),
  sync: { alter: true },
  repositoryMode: true,
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false, 
    },
  },
});
