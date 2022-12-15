import User from "../entities/user";

export const getById = (id: number) => {
  const user = User.findByPk(id).then(console.log);
};

export const createUser = (user: {
  name: string;
  username: string;
  password: string;
  email: string;
}) => {
  User.create(user).then(console.log);
};
