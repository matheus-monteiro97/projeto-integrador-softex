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
}

module.exports = CustomerRepository;
