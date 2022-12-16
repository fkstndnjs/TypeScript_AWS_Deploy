import express from "express";
import auth from "../middleware/auth";
import * as tweetController from "./tweet.controller";

const tweetRouter = express.Router();

tweetRouter.get("/", auth, tweetController.getAllTweets);

tweetRouter.post("/", auth, tweetController.createTweet);

export default tweetRouter;
