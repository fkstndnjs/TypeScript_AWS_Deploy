import express from "express";
import { body } from "express-validator";
import validate from "../middleware/validate";
import * as authController from "./auth.controller";

const authRouter = express.Router();
const loginValidation = [
  body("username").isEmpty().withMessage("아이디를 입력해주세요."),
  body("password").isEmpty().withMessage("비밀번호를 입력해주세요"),
  validate,
];
const signupValidation = [
  ...loginValidation,
  body("name").isEmpty().withMessage("이름을 입력해주세요."),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("이메일 형식에 맞지 않습니다."),
  validate,
];

authRouter.post("/signup", signupValidation, authController.signup);
authRouter.post("/login", loginValidation, authController.login);

export default authRouter;
