import { pino, LoggerOptions } from "pino";
import pinoHttp from "pino-http";
import { config } from "./env.config";

// TODO: customize logger
const pinoConfig: LoggerOptions = {
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      colorizeObjects: true,
    },
  },
};

export const logger = pino(config.nodeEnv !== "production" ? pinoConfig : {});

export const httpLogger = pinoHttp(
  config.nodeEnv !== "production" ? pinoConfig : {}
);
