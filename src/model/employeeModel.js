const Sequelize = require ("sequelize");
const database = require ("../../config/connectionDB");
const UserModel = require ("./UserModel");

class EmployeeModel extends UserModel {
    constructor () {
        super();
        this.employee = database.define ("employee", {
        })
    }
}