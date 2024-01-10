const sequelize = require("sequelize");
const database = require("../../config/connectionDB");
const userModel = require("./userModel");

class CustomerModel {
    static customer = database.define("customer", {
        id: {
          type: sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        userId: {
            type:sequelize.INTEGER,
            allowNull: false,
            references: {
                model: userModel.user,
                key: "id",
            },
        },
        name: {
            type: sequelize.STRING(100),
            allowNull: false,
          },
        phoneNumber: {
            type: sequelize.STRING(14),
            unique: true,
            allowNull: false,
        },
        nameCompany: {
          type: sequelize.STRING(100),
          allowNull: false,
        },
        addressCompany: {
          type: sequelize.STRING(255),
          allowNull: false,
        },
        role: {
          type: sequelize.STRING(40),
          allowNull: false,
        },
        department: {
          type: sequelize.STRING(40),
          allowNull: true,
        },
      });

      static associate() {
        CustomerModel.customer.belongsTo(userModel.user, { foreignKey: "userId" });
    }
}

module.exports = CustomerModel;
