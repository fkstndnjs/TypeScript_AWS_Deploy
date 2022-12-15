import { Sequelize } from "sequelize";

const db = new Sequelize("twitter", "root", "0000", {
  host: "127.0.0.1",
  dialect: "mysql",
});
