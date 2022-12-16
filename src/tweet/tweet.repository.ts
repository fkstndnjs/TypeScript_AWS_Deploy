import Tweet from "../entities/tweet";
import User from "../entities/user";

export const getAllTweets = async () => {
  Tweet.findAll({
    attributes: ["id", "text"],
    include: {
      model: User,
      attributes: ["id", "username"],
    },
    order: [["createdAt", "DESC"]],
  });
};
