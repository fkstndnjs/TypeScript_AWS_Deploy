import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import * as UserRepository from "../repository/user.repository";

const createJWTToken = (id: number) => {
  const token = jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresIn,
  });

  return token;
};

export const signup = (req: Request, res: Response, next: NextFunction) => {};

export const login = (req: Request, res: Response, next: NextFunction) => {};
