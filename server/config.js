import dotenv from "dotenv";

dotenv.config();

export const config = {
  POGO_API_CLIENT_KEY: process.env.POGO_API_CLIENT_KEY,
  POGO_API_APP_KEY: process.env.POGO_API_APP_KEY,
  POGO_AUTH_KEY: process.env.POGO_AUTH_KEY,
};
