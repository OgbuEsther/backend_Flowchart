import dotenv from "dotenv";
dotenv.config();

const envVariables = {
  PORT: process.env.PORT as string,
};

export default envVariables;
