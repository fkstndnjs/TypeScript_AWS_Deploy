import User from "../entities/user";

export const getById = (id: number) => {
  const user = User.findByPk(id).then(console.log);
};

export const getByUsername = (username: string) => {
  const user = User.findOne({
    where: {
      username,
    },
  }).then(console.log);
};

export const createUser = (user: {
  name: string;
  username: string;
  password: string;
  email: string;
}) => {
  User.create(user).then(console.log);
};
