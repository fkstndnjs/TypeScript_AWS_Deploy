import dotenv from "dotenv";

dotenv.config();

const config = {
  port: parseInt(process.env.PORT!),
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS!),
    max: parseInt(process.env.RATE_LIMIT_MAX!),
  },
  db: {
    database: process.env.DATABASE!,
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    host: process.env.DATABASE_HOST!,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY!,
    expiresIn: process.env.JWT_EXPIRES_IN!,
  },
  bcrypt: {
    saltRounds: process.env.BCRYPT_SALT!,
  },
};

export default config;
