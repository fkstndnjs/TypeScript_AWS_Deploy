import User from "../entities/user";

export const getByUsername = async (username: string) => {
  const user = User.findOne({
    where: {
      username,
    },
  }).then((data) => {
    console.log(data);

    return data?.dataValues;
  });

  return user;
};

export const createUser = async (user: {
  name: string;
  username: string;
  password: string;
  email: string;
}) => {
  return User.create(user).then((data) => {
    return data.dataValues;
  });
};
