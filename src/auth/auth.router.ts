import express from "express";

const authRouter = express.Router();

authRouter.post("/signup", signupController);
authRouter.post("/login", loginController);

export default authRouter;
