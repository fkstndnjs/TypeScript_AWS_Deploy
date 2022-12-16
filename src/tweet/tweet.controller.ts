import { NextFunction, Request, Response } from "express";
import * as tweetRepository from "./tweet.repository";

export const getAllTweets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tweets = await tweetRepository.getAllTweets();

  return tweets;
};
