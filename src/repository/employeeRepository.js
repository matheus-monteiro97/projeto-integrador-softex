const EmployeeModel = require('../model/employeeModel');
const UserModel = require("../model/UserModel");

class EmployeeRepository {

    // FUNÇÃO PARA CRIAR FUNCIONÁRIOS
    static createEmployee = async function (data) {
        try {
            const newEmployee = await EmployeeModel.employee.create(data);
            return newEmployee;
        } catch (error) {
            console.error("Error creating Employee:", error.message);
            throw new Error("Error creating Employee");
        }
    };

    //FUNÇÃO PARA OBTER TODOS OS FUNCIONÁRIOS
    static async getAllEmployees() {
        try {
            const employees = await EmployeeModel.employee.findAll({
                include: [{
                model: UserModel.user,
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
