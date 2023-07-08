import cors from "cors";
import express, { json } from "express";
import { exceptionHandlerMiddleware } from "middleware/excepction-handler.middleware";
import "reflect-metadata";
import { router } from "routes/index";
import swaggerUi from "swagger-ui-express";
import { swaggerDoc } from "./swagger.config";

const app = express();

app.use(
  cors({
    // TODO: Configure cors
    origin: "*",
  })
);

// TODO: Customize logging format
// app.use(httpLogger);
app.use(json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api", router);

// NOTE: this middelware MUST be in last position, otherwise you will break the exception layer
app.use(exceptionHandlerMiddleware);

export { app };
