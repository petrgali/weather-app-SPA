import DataTypes from "sequelize";
import Sequelize from "sequelize";

const sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: "test.sqlite",
});

export const Forecast = sequelize.define("forecast", {
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.STRING,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("Unable to establish DB connection", err));

export default sequelize;
