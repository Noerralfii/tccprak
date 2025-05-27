// database.js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,           // e.g. aripunya
  process.env.DB_USERNAME,       // e.g. 123220213
  process.env.DB_PASSWORD,       // e.g. passwordmu
  {
    dialect: "mysql",
    dialectOptions: {
      socketPath: process.env.DB_HOST, // penting untuk Cloud SQL
    },
    logging: false,
  }
);

export default sequelize;
