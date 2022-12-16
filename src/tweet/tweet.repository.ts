import Tweet from "../entities/tweet";
import User from "../entities/user";

export const getAllTweets = async () => {
  return Tweet.findAll({
    attributes: ["id", "text"],
    include: {
      model: User,
      attributes: ["id", "username"],
    },
    order: [["createdAt", "DESC"]],
  });
};

export const getTweetById = async (id: string) => {
  return Tweet.findByPk(id, {
    attributes: ["id", "text"],
    include: {
      model: User,
      attributes: ["id", "username"],
    },
  }).then((data) => {
    console.log(data);
    return data?.dataValues;
  });
};

export const createTweet = async (tweet: { text: string; userId: string }) => {
  return Tweet.create(tweet).then((data) => data.dataValues);
};

export const updateTweet = async (tweetId: string, text: string) => {};
