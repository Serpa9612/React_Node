import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "Datecsa2018",
  database: "Movies",
  host: "localhost",
  port: "5433",
  dialect: "postgres",
});
