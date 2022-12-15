import dotenv from "dotenv";

dotenv.config();

const config = {
  port: parseInt(process.env.PORT!),
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS!),
    max: process.env.RATE_LIMIT_MAX,
  },
};

export default config;
