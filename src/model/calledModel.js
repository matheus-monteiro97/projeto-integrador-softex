const sequelize = require("sequelize");
const database = require("../../config/connectionDB");
const customerModel = require("./customerModel");
const employeeModel = require("./employeeModel");

class CalledModel {
  static called = database.define("caller", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    customerId: {
      type: sequelize.INTEGER,
      references: {
        model: customerModel.customer,
        key: "id",
      },
    },
    employeeId: {
      type: sequelize.INTEGER,
      references: {
        model: employeeModel.employee,
        key: "id",
      },
    },
    creationDate: {
      type: sequelize.DATE,
      allowNull: false,
    },
    closingDate: {
      type: sequelize.DATE,
      allowNull: true,
    },
    titleCalled: {
      type: sequelize.STRING(255),
      allowNull: false,
    },
    problem: {
      type: sequelize.STRING(255),
      allowNull: true,
    },
    solution: {
      type: sequelize.STRING(500),
      allowNull: false,
    },
    description: {
      type: sequelize.STRING(500),
      allowNull: false,
    },
    priority: {
      type: sequelize.ENUM("high", "mean", "low"),
      allowNull: false,
    },
    statusCalled: {
      type: sequelize.ENUM("open", "progress", "close"),
      allowNull: false,
    },
    isActive: {
      type: sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  static associate() {
    CalledModel.called.belongsTo(customerModel.customer, {
      foreignKey: "customerId",
    }),
      CalledModel.called.belongsTo(employeeModel.employee, {
        foreignKey: "employeeId",
      });
  }
}

module.exports = CalledModel;
