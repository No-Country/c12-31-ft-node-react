import { app } from "config/app.config";
import { dbContext } from "config/database.config";
import { config } from "config/env.config";
import { logger } from "config/logger.config";

async function bootstrap() {
  app.listen(config.server.port,'0.0.0.0', async () => {
    await dbContext.initialize();
    logger.info(`🔥 App ready an listening on PORT ${config.server.port} 🔥`);
  });
}

bootstrap();
