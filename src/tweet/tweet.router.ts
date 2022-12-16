import express from "express";
import * as tweetController from "./tweet.controller";

const tweetRouter = express.Router();

tweetRouter.get("/", tweetController.getAllTweets);

tweetRouter.post("/", tweetController.createTweet);

export default tweetRouter;
