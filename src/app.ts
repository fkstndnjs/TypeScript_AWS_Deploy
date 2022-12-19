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
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  // 라우터
  private setRouter() {
    this.app.use("/auth", authRouter);
    this.app.use("/tweet", tweetRouter);
  }

  private setErrorHandler() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send("NOT FOUND");
    });

    this.app.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send(err);
      }
    );
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

    this.setErrorHandler();
  }

  public listen() {
    this.setMiddleware();

    db.sync().then(() => {
      this.app.listen(config.port, () => {
        console.log("Server On...");
      });
    });
  }
}

function init() {
  const server = new Server();

  server.listen();
}

init();
