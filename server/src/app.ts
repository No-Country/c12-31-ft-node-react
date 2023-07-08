import ViteExpress from "vite-express";
import path from "path";
import { app } from "config/app.config";
import { logger } from "config/logger.config";
import { dataSource } from "config/sequelize.config";
import { config } from "config/env.config";

async function initCallback() {
  await dataSource.initialize();
  logger.info(`🔥 App ready an listening on PORT ${config.server.port} 🔥`);
}
async function bootstrap() {
  if (config.nodeEnv === "production") {
    ViteExpress.config({
      mode: "production",
      inlineViteConfig: {
        root: path.resolve(__dirname, "..", "..", "client"),
      },
    });
    ViteExpress.listen(app, config.server.port, initCallback);
  } else {
    app.listen(config.server.port, initCallback);
  }
}

bootstrap();
