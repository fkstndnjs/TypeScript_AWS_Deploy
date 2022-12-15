import dotenv from "dotenv";

dotenv.config();

const config = {
  port: parseInt(process.env.PORT!),
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS!),
    max: parseInt(process.env.RATE_LIMIT_MAX!),
  },
  db: {
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
  },
};

export default config;
