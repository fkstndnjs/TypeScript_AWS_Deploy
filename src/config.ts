import dotenv from "dotenv";

dotenv.config();

const config = {
  port: parseInt(process.env.PORT!),
};

export default config;
