import express from "express";
import { body } from "express-validator";
import validate from "../middleware/validate";

const authRouter = express.Router();
const loginValidation = [
  body("username").isEmpty().withMessage("아이디를 입력해주세요."),
  body("password").isEmpty().withMessage("비밀번호를 입력해주세요"),
  validate,
];
const signupValidation = [body("username")];

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);

export default authRouter;
