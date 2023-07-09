import { Boom } from "@hapi/boom";
import { logger } from "config/logger.config";
import { ErrorRequestHandler } from "express";

export const exceptionHandlerMiddleware: ErrorRequestHandler = (
  err: unknown,
  req,
  res,
  next
) => {
  if (!(err instanceof Error)) {
    logger.error(err, "Unknown error");
    next(
      "This should never have happened, please contact with your system administrator"
    );
  } else if (err instanceof Boom) {
    return res.status(err.output.statusCode).json(err.output.payload);
  } else {
    switch (err.name) {
      // NOTE: Add other errors here
      case "SyntaxError":
        return res.status(400).json({
          statusCode: 400,
          message: `JSON parser error, invalid format: ${err.message}`,
          error: SyntaxError.name,
        });

      default:
        logger.error(err, "Internal server error");
        return res.status(500).json({
          statusCode: 500,
          message: "Internal server error",
          error: err.name,
        });
    }
  }
};
