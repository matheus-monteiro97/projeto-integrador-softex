const Sequelize = require("sequelize");
const database = require("../../config/connectionDB");
const UserModel = require("./UserModel");

class CustomerModel extends UserModel {
  constructor() {
    super();
    this.customer = database.define("customer", {
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
  }
}
module.exports = CustomerModel;
