import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    const temp = jwt.verify(token, config.jwt.secretKey, (err, data) => {
      if (err) {
        return res.status(401).send("잘못된 접근입니다.");
      }
    });
  } else {
    res.status(401).send("잘못된 접근입니다.");
  }
};
