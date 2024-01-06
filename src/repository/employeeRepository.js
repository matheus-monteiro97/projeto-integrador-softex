const employeeModel = require('../model/employeeModel');

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
}

module.exports = EmployeeRepository;
