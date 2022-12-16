import express from "express";
import auth from "../middleware/auth";
import * as tweetController from "./tweet.controller";

const tweetRouter = express.Router();

tweetRouter.get("/", auth, tweetController.getAllTweets);

tweetRouter.get("/:tweetId", auth, tweetController.getTweetById);

tweetRouter.post("/", auth, tweetController.createTweet);

tweetRouter.put("/:tweetId", tweetController.updateTweet);

export default tweetRouter;
