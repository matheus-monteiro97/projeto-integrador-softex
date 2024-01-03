const employee = require("../model/employeeModel");

class EmployeeController {
    async createEmployee (req, res) {
            try {
                const { name,
                    phoneNumber,
                    emailAddress,
                    password,
                    dateRegistration,
                    userType,
                    registrationNumber,
                    role,
                    isActive,
                    isAdmin,
                  } = req.body;

                const newEmployee = await employee.create( { name,
                    phoneNumber,
                    emailAddress,
                    password,
                    dateRegistration,
                    userType:"Employee",
                    registrationNumber,
                    role,
                    isActive,
                    isAdmin,
                  });

                  return res.status(201).json(newEmployee)
            } catch (error) {
                return res.status(500).json({ error: "Error creating Employee" });
            }
        }
}

module.exports = EmployeeController;