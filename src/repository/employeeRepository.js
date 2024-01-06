const employeeModel = require('../model/employeeModel');
const userModel = require("../model/UserModel");

class EmployeeRepository {
    static createEmployee = async function (data) {
        try {
            const newEmployee = await employeeModel.employee.create(data);
            return newEmployee;
        } catch (error) {
            console.error("Error creating Employee:", error.message);
            throw new Error("Error creating Employee");
        }
    };

    static async getAllEmployees() {
        try {
            const employees = await employeeModel.employee.findAll({
                include: [{
                model: userModel.user,
                required: true,
                where: { userType: 'Employee' }, //CONDIÇÃO PARA RESGATAR USER E EMPLOYEE
            }],
        });
            return employees;
        } catch (error) {
            console.log(error.message)
            throw new Error("Error retrieving all employees:" , error.message);
        }
    }
}

module.exports = EmployeeRepository;
