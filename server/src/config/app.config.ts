/* eslint-disable prettier/prettier */
import express, { json } from "express";
import { exceptionHandlerMiddleware } from "src/middleware/excepction-handler.middleware";
import swaggerUi from "swagger-ui-express";
import { httpLogger } from "./logger.config";
import { swaggerDoc } from "./swagger.config";
import { router } from "src/routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    // TODO: Configure cors
    origin: "*",
  })
);

// TODO: Customize logging format
app.use(httpLogger);
app.use(json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api", router);

// NOTE: this middelware MUST be in last position, otherwise you will break the exception layer
app.use(exceptionHandlerMiddleware);

export { app };
