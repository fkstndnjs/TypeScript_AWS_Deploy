import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const createJWTToken = (id: number) => {
  jwt.sign({ id });
};

export const signup = (req: Request, res: Response, next: NextFunction) => {};

export const login = (req: Request, res: Response, next: NextFunction) => {};
