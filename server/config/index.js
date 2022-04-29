import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
};

export default config;