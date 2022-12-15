import express from "express";
import { body } from "express-validator";
import validate from "../middleware/validate";

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
];

authRouter.post("/signup", signupValidation, signupController);
authRouter.post("/login", loginValidation, loginController);

export default authRouter;
