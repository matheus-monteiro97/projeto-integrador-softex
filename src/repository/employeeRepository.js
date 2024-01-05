const EmployeeModel = require('../model/employeeModel');

class EmployeeRepository {
    static createEmployee = async function (data) {
        try {
            const newEmployee = await EmployeeModel.employee.create(data);
            return newEmployee;
        } catch (error) {
            console.error("Error creating Employee:", error.message);
            throw new Error("Error creating Employee");
        }
    };
}

module.exports = EmployeeRepository;
