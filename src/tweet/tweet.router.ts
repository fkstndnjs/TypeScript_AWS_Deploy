import express from "express";
import * as tweetController from "./tweet.controller";

const tweetRouter = express.Router();

tweetRouter.get("/", tweetController.getAllTweets);

export default tweetRouter;
