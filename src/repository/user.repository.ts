import User from "../entities/user";

export const getById = async (id: number) => {
  const user = User.findByPk(id).then(console.log);
};

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
  User.create(user).then(console.log);
};
