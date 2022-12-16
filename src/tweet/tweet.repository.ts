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

export const createTweet = async (tweet: { text: string; userId: string }) => {
  return Tweet.create(tweet).then((data) => data.dataValues);
};
