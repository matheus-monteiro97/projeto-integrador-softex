const Sequelize = require("sequelize");
const database = require("../config/dbConnection");

const CustomerModel = database.define("customer", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nameCompany: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  addressCompany: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
  department: {
    type: Sequelize.STRING(40),
    allowNull: true,
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = CustomerModel;
