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
                res.status(500).send({error: "Erro ao obter funcionários"});
            }
        }
        }

        //CHAMADA DE FUNÇÃO PARA DELETAR EMPLOYEE E USER

module.exports = EmployeeController;