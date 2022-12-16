import { NextFunction, Request, Response } from "express";
import * as tweetRepository from "./tweet.repository";

export const getAllTweets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tweets = await tweetRepository.getAllTweets();

  res.status(200).json(tweets);
};

export const getTweetById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tweetId } = req.params;

  const tweet = await tweetRepository.getTweetById(tweetId);

  res.status(200).json(tweet);
};

export const createTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text } = req.body;

  const userId = req.headers.userId as string;

  const tweet = await tweetRepository.createTweet({ text, userId });

  res.status(201).json(tweet);
};

export const updateTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tweetId } = req.params;
  const { text } = req.body;

  await tweetRepository.updateTweet(tweetId, text);

  res.status(200).send("트윗이 수정되었습니다.");
};

export const deleteTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { tweetId } = req.params;

  await tweetRepository.deleteTweet(tweetId);

  res.status(204).send("트윗이 삭제되었습니다.");
};
