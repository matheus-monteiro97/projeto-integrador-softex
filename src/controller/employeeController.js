const userRepository = require("../repository/userRepository");
const employeeRepository = require("../repository/employeeRepository");

class EmployeeController {
    async createEmployee (req, res) {
            try {
                const {
                    emailAddress,
                    password,
                    userType,
                    isActive,
                    name,
                    phoneNumber,
                    registrationNumber,
                    role,
                    isAdmin,
                  } = req.body;

                  console.log("Received request with data:", req.body);

                  const newUser = await userRepository.createUser ({
                    emailAddress,
                    password,
                    userType: "Employee",
                    isActive,
                  });

                // Chama o método createUser da classe pai (UserController)
                // const newUser = await super.createUser(req, res);

                // O Sequelize já atribuiu um valor ao id após a criação do usuário
                const userId = newUser.id;

                const newEmployee = await employeeRepository.createEmployee( {
                    userId,
                    name,
                    phoneNumber,
                    registrationNumber,
                    role,
                    isAdmin,
                  });

                  console.log("Employee created:", newEmployee);

                  return res.status(201).json(newEmployee);
              } catch (error) {
                  console.error("Error creating Employee:", error);
                  return res.status(500).json({ error: "Error creating Employee" });
              }
          }

          async getAllEmployees(req, res) {
            try {
                const employees = await employeeRepository.getAllEmployees();
    
                res.status(200).json(employees);
            } catch (error) {
                console.error(error.message);
                res.status(500).send({error: "Error while retrieving employees"});
            }
        }

        async getByIdEmployee(req, res) {
            try {
                const {id} = req.params;
                const employee = await employeeRepository.getByIdEmployee(id);
                res.status(200).json(employee);
            } catch (error) {
                console.error(error.message);
                res.status(500).send({error: "Error while retrieving employee"});
            }
        }

    }

module.exports = EmployeeController;