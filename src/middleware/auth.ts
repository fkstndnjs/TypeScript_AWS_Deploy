import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, config.jwt.secretKey, (err: any, data: any) => {
      if (err) {
        return res.status(401).send("토큰이 유효하지 않습니다.");
      }

      if (!data) {
        return res.status(401).send("토큰이 유효하지 않습니다.");
      } else {
        req.headers["userId"] = data.id;
        return next();
      }
    });
  } else {
    return res.status(401).send("토큰이 유효하지 않습니다.");
  }
};

export default auth;
