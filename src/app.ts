import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./auth/auth.router";
import config from "./config";
import db from "./database";
import rateLimiter from "./middleware/rateLimiter";
import tweetRouter from "./tweet/tweet.router";

const app = express();

dotenv.config();

app.use(express.json());
if (config.nodeEnv === "production") {
  console.log(`config.nodeEnv === "production"`);

  app.use(morgan("combined"));
} else {
  console.log(`config.nodeEnv === "develop"`);

  app.use(morgan("dev"));
}
app.use(helmet());
app.use(rateLimiter);

app.use("/auth", authRouter);
app.use("/tweet", tweetRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("NOT FOUND");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(err);
});

db.sync().then(() => {
  app.listen(config.port, () => {
    console.log("Server On...");
  });
});
