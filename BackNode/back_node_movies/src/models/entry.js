import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

const Entry = sequelize.define("Entry", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  programType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Entry;
