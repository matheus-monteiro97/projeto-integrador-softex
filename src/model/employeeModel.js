const sequelize = require ("sequelize");
const database = require ("../../config/connectionDB");
const userModel = require("./userModel");

class EmployeeModel {
    static employee = database.define("employee", {
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
        registrationNumber: {
            type: sequelize.STRING(12),
            allowNull: false,
        },
        role: {
            type: sequelize.STRING(15),
            allowNull: false,
        },
        isAdmin: {
            type: sequelize.BOOLEAN,
            allowNull: false,
        },
    });

    static associate() {
        EmployeeModel.employee.belongsTo(userModel.user, { foreignKey: "userId" });
    }

}

module.exports = EmployeeModel;