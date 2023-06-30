import { sequelize } from "./config/sequelize.config";
import { logger } from "./config/logger.config";
import { app } from "./config/app.config";

const PORT = process.env.API_PORT;

app.listen(PORT, async () => {
  await sequelize.authenticate();
  await sequelize.sync();

  logger.info(`🔥 App ready an listening on port ${PORT} 🔥`);
});
