const Sequelize = require ("sequelize");
const database = require ("../../config/connectionDB");
const UserModel = require ("./UserModel");

class EmployeeModel extends UserModel {
    constructor () {
        super();
        this.employee = database.define ("employee", {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            registrationNumber: {
                type: Sequelize.STRING(12),
                allowNull: false,
            },
            role: {
                type: Sequelize.STRING(15),
                allowNull: false,                 
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        })
    }
}

module.exports = EmployeeModel;