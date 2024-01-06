const Sequelize = require("sequelize");
const database = require("../../config/connectionDB");
const customerModel = require("./customerModel");
const employeeModel = require("./employeeModel");
const CustomerModel = require("./customerModel");
const EmployeeModel = require("./employeeModel");

class CalledModel {
  static called = database.define("caller", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    customerId: {
      type: Sequelize.INTEGER,
      references: {
        model: customerModel.customer,
        key: "id",
      },
    },
    employeeId: {
      type: Sequelize.INTEGER,
      references: {
        model: employeeModel.employee,
        key: "id",
      },
    },
    creationDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    closingDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    titleCalled: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    problem: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    solution: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
    priority: {
      type: Sequelize.ENUM("high", "mean", "low"),
      allowNull: false,
    },
    statusCalled: {
      type: Sequelize.ENUM("open", "progress", "close"),
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  });

  static associate() {
    CalledModel.called.belongsTo(CustomerModel.customer, {
      foreignKey: "customerId",
    }),
      CalledModel.called.belongsTo(EmployeeModel.employee, {
        foreignKey: "employeeId",
      });
  }
}

module.exports = CalledModel;
