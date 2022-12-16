import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import * as UserRepository from "../repository/user.repository";
import bcrypt from "bcrypt";

const createJWTToken = (id: number) => {
  const token = jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresIn,
  });

  return token;
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, username, password, email } = req.body;

  const foundUser = await UserRepository.getByUsername(username);

  if (foundUser) {
    return res.status(409).send("이미 존재하는 사용자입니다.");
  }

  const hashedPassword = await bcrypt.hash(password, config.bcrypt.saltRounds);

  const user = await UserRepository.createUser({
    name,
    username,
    password: hashedPassword,
    email,
  });

  const token = createJWTToken(user);

  res.status(201).json({ token });
};

export const login = (req: Request, res: Response, next: NextFunction) => {};
