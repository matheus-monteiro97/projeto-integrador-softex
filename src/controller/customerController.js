const userRepository = require("../repository/userRepository");
const customerRepository = require("../repository/custumerRepository");

class CustomerController {
  async createCustumer(req, res) {
    try {
      const {
        emailAddress,
        password,
        userType,
        isActive,
        name,
        phoneNumber,
        nameCompany,
        addressCompany,
        role,
        department,
      } = req.body;

      console.log("Received request with data:", req.body);

      const newUser = await userRepository.createUser({
        emailAddress,
        password,
        userType: "Custumer",
        isActive: true,
      });

      // Chama o método createUser da classe pai (UserController)
      // const newUser = await super.createUser(req, res);

      // O Sequelize já atribuiu um valor ao id após a criação do usuário
      const userId = newUser.id;

      const newCustumer = await customerRepository.createCustomer({
        userId,
        name,
        phoneNumber,
        nameCompany,
        addressCompany,
        role,
        department,
      });

      console.log("Employee created:", newCustumer);

      return res.status(201).json(newEmployee);
    } catch (error) {
      console.error("Error creating Custumer:", error);
      return res.status(500).json({ error: "Error creating Custumer" });
    }
  }
}

module.exports = CustomerController;
