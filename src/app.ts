import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./config";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.listen(config.port, () => {
  console.log("Server On...");
});
