const userRepository = require("../repository/userRepository");
const customerRepository = require("../repository/customerRepository");

class CustomerController {
  async createCustomer(req, res) {
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
        userType: "Customer",
        isActive,
      });

      // Chama o método createUser da classe pai (UserController)
      // const newUser = await super.createUser(req, res);

      // O Sequelize já atribuiu um valor ao id após a criação do usuário
      const userId = newUser.id;

      const newCustomer = await customerRepository.createCustomer({
        userId,
        name,
        phoneNumber,
        nameCompany,
        addressCompany,
        role,
        department,
      });

      console.log("Customer created:", newCustomer);

      return res.status(201).json(newCustomer);
    } catch (error) {
      console.error("Error creating Customer:", error);
      return res.status(500).json({ error: "Error creating Custumer" });
    }
  }

  async getAllCustomers(req, res) {
    try {
      const customers = await customerRepository.getAllCustomers();

      res.status(200).json(customers);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Error while retrieving customers" });
    }
  }

  async getByIdCustomer(req, res) {
    try {
      const { id } = req.params;
      const customer = await customerRepository.getByIdCustomer(id);
      res.status(200).json(customer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Error while retrieving customer" });
    }
  }

  async updateCustomer(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedCustomer = await customerRepository.updateCustomer(id, data);

      res.json(updatedCustomer);
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .json({ success: false, message: "Error updating customer." });
    }
  }

  async deleteCustomer(req, res) {
    try {
      const { id } = req.params;
      const deletedCustomer = await customerRepository.deleteCustomer(id);

      res.status(200).json(deletedCustomer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Error while deleting the Customer" });
    }
  }

  async customerIsActive(req, res) {
    try {
      const { id } = req.params;
      const customer = await customerRepository.getByIdCustomer(id);

      this.customer.isActive = false;

      res.status(200).json(customer);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Error while retrieving customer" });
    }
  }
}

module.exports = CustomerController;
