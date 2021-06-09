// eslint-disable-next-line
import DataTypes from "sequelize";
// eslint-disable-next-line
import Sequelize from "sequelize";

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'test.sqlite',
});

export const Forecast = sequelize.define('forecast', {
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
  .then(() => process.stdout.write('DB connection established'))
  .catch((err) => process.stderr.write('Unable to establish DB connection', err));

export default sequelize;
