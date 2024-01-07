const customerModel = require("../model/customerModel");
const userModel = require ("../model/UserModel")

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

  static async getByIdCustomer(id) {
    try {
        const customer = await customerModel.customer.findAll({
            where: { id },
            include: [userModel.user],
        });

        if (!customer) {
            throw new Error('Customer not found for the provided ID');
        }

        return customer;
    } catch (error) {
        console.error('Error while fetching the Customer:', error.message);
        throw new Error('Error while fetching the Customer');
    }
}
}

module.exports = CustomerRepository;
