import { app } from "config/app.config";
import { dbContext } from "config/database.config";
import { config } from "config/env.config";
import { logger } from "config/logger.config";
import express from "express";
import path from "path";

async function initCallback() {
  await dbContext.initialize();
  logger.info(`🔥 App ready an listening on PORT ${config.server.port} 🔥`);
}

async function bootstrap() {
  if (config.nodeEnv === "production") {
    app.use(express.static(path.join(__dirname, "..", "..", "client", "dist")));
  }

  app.listen(config.server.port, initCallback);
}

bootstrap();
