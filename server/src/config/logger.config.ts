import { pino } from "pino";
import pinoHttp from "pino-http";
import { config } from "./env.config";

export const logger = pino();

export const httpLogger = pinoHttp({
  // transport: {
  //   target: "pino-pretty",
  //   options: {
  //     colorize: true,
  //     colorizeObjects: true,
  //     // singleLine: true,
  //   },
  // },
});
