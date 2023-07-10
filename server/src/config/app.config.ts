import cors from "cors";
import helmet from "helmet";
import express, { json } from "express";
import { exceptionHandlerMiddleware } from "middleware/excepction-handler.middleware";
import path from "path";
import "reflect-metadata";
import { router } from "routes/index";
import swaggerUi from "swagger-ui-express";
import { config } from "./env.config";
import { swaggerDoc } from "./swagger.config";
import { httpLogger } from "./logger.config";

const app = express();

app.use(helmet());

app.use(
  cors({
    // TODO: Configure cors
    origin: "*",
  })
);

if (config.nodeEnv !== "test") {
  // TODO: Customize logging format
  app.use(httpLogger);
}
app.use(json());

if (config.nodeEnv === "production") {
  app.use(
    // TODO: could be stored in ENV variable
    express.static(path.join(__dirname, "..", "..", "..", "client", "dist"))
  );
}

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use("/api", router);

// NOTE: this middelware MUST be in last position, otherwise you will break the exception layer
app.use(exceptionHandlerMiddleware);

export { app };
