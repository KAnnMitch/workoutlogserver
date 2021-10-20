const { DataTypes } = require("sequelize");
const db = require("../db");
const log = db.define("log", {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  defintion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER,
  }
});
module.exports = log;
