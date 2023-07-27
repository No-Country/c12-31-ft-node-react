import "dotenv/config";

export const config = {
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    url: process.env.DB_URL,
    ssl: process.env.DB_SSL === "true",
  },
  server: {
    port: parseInt(process.env.PORT ?? "3000"),
  },
  jwt: {
    secret: process.env.JWT_SECRET!,
    expires: process.env.JWT_EXPIRES,
  },
  nodeEnv: process.env.NODE_ENV,
};
