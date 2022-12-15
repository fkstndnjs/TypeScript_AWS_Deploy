import limiter from "express-rate-limit";
import config from "../config";

const rateLimiter = limiter({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: "잠시 후에 시도해주세요.",
});
