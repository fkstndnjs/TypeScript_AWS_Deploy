import { DataTypes } from "sequelize";
import db from "../database";
import User from "./user";

const Tweet = db.define("tweet", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Tweet.belongsTo(User);
