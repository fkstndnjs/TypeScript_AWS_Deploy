import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";
import db from "./database";
import rateLimiter from "./middleware/rateLimiter";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(rateLimiter);

// app.use("/auth");

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
