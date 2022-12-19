import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./auth/auth.router";
import config from "./config";
import db from "./database";
import rateLimiter from "./middleware/rateLimiter";
import tweetRouter from "./tweet/tweet.router";
import cors from "cors";

class Server {
  private app: Express;

  constructor() {
    this.app = express();
  }

  private setRouter() {
    this.app.use("/auth", authRouter);
    this.app.use("/tweet", tweetRouter);
  }

  private setMiddleware() {
    this.app.use(express.json());
    if (config.nodeEnv === "production") {
      console.log(`config.nodeEnv === "production"`);

      this.app.use(morgan("combined"));
    } else {
      console.log(`config.nodeEnv === "develop"`);

      this.app.use(morgan("dev"));
    }
    this.app.use(helmet());
    this.app.use(rateLimiter);
    this.app.use(cors());

    this.setRouter();
  }
}

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
