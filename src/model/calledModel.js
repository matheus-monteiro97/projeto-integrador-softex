const Sequelize = require("sequelize");
const database = require("../../config/connectionDB");
const customer = require("./CustomerModel");
const Employee = require ("./employeeModel");

class CalledModel {
  constructor() {
    this.called = database.define("called", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      idCustomer: {
        type: Sequelize.INTEGER,
        references: {
          model: customer,
          key: "id",
        },
      },
      idEmployee: {
        type: Sequelize.INTEGER,
        references: {
          model: Employee,
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

    this.called.belongsTo(customer, {
      foreignKey: "idCustomer",
    });

    this.called.belongsTo(Employee, {
      foreignKey: "idEmployee",
    });
  }
}

module.exports = CalledModel;
