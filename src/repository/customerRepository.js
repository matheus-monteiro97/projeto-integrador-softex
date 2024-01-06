const customerModel = require("../model/customerModel");

class CustomerRepository {
  static createCustomer = async function (data) {
    try {
      const newCustomer = await customerModel.customer.create(data);
      return newCustomer;
    } catch (error) {
      console.error("Error creating Customer:", error.message);
      throw new Error("Error creating Customer");
    }
  };

  static getAllCustomers = async function () {
    try {
      const customers = await customerModel.customer.findAll({
        include: [
          {
            model: userModel.user,
            required: true,
            where: { userType: "Customer" }, //CONDIÇÃO PARA RESGATAR USER E CUSTOMER
          },
        ],
      });
      return customers;
    } catch (error) {
      console.log(error.message);
      throw new Error("Error retrieving all customers:", error.message);
    }
  };
}

module.exports = CustomerRepository;
