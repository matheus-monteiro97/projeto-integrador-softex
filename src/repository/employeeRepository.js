const employeeModel = require('../model/employeeModel');
const userModel = require("../model/UserModel");
const database = require("../../config/connectionDB");

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

    static async getByIdEmployee(id) {
        try {
            const employee = await employeeModel.employee.findOne({
                where: { id },
                include: [userModel.user],
            });

            if (!employee) {
                throw new Error('Employee not found for the provided ID');
            }

            return employee;
        } catch (error) {
            console.error('Error while fetching the Employee:', error.message);
            throw new Error('Error while fetching the Employee');
        }
    }

    static async deleteEmployee(id) {
        const transaction = await database.transaction();

        try {
            const employee = await employeeModel.employee.findOne({
                where: { id },
                include: [userModel.user],
                transaction,
            });

            if (!employee) {
                throw new Error('Employee not found for the provided ID');
            }

            // Excluir o Employee
            await employee.destroy({ transaction });

            // Excluir o User associado
            const user = await userModel.user.findByPk(employee.userId, { transaction });
            await user.destroy({ transaction });

            // Commit da transação
            await transaction.commit();

            return employee;
        } catch (error) {
            // Rollback em caso de erro
            await transaction.rollback();

            console.error('Error while deleting the Employee and associated User:', error.message);
            throw new Error('Error while deleting the Employee and associated User');
        }
    }
}

module.exports = EmployeeRepository;
