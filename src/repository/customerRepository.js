const customerModel = require("../model/customerModel");
const userModel = require("../model/UserModel");
const database = require("../../config/connectionDB");

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
        throw new Error("Customer not found for the provided ID");
      }

      return customer;
    } catch (error) {
      console.error("Error while fetching the Customer:", error.message);
      throw new Error("Error while fetching the Customer");
    }
  }

  static async updateCustomer(id, data) {
    try {
      const customer = await customerModel.customer.findOne({
        where: { id },
        include: [userModel.user],
      });

      if (!customer) {
        throw new Error("Customer not found for the provided ID.");
      }

      // DADOS QUE PODEM SER ATUALIZADOS
      const {
        name,
        phoneNumber,
        nameCompany,
        addressCompany,
        role,
        department,
        emailAddress,
        password,
        isActive,
      } = data;

      // Acesso direto às informações do usuário associado
      const user = customer.user;

      // Atualizar os dados nas tabelas 'employee' e 'user'
      await customer.update({
        name,
        phoneNumber,
        nameCompany,
        addressCompany,
        role,
        department,
      });

      await user.update({
        emailAddress,
        password,
        //isActive,
      });

      return { success: true, message: "customer updated successfully." };
    } catch (error) {
      console.error("Error updating customer.", error.message);
      return { success: false, message: "Error updating customer." };
    }
  }

  static async deleteCustomer(id) {
    const transaction = await database.transaction();

    try {
      const customer = await customerModel.customer.findOne({
        where: { id },
        include: [userModel.user],
        transaction,
      });

      if (!customer) {
        throw new Error("Customer not found for the provided ID");
      }

      // Excluir o Customer
      await customer.destroy({ transaction });

      // Excluir o User associado
      const user = await userModel.user.findByPk(customer.userId, {
        transaction,
      });
      await user.destroy({ transaction });

      // Commit da transação
      await transaction.commit();

      return customer;
    } catch (error) {
      // Rollback em caso de erro
      await transaction.rollback();

      console.error(
        "Error while deleting the Employee and associated User:",
        error.message
      );
      throw new Error("Error while deleting the Employee and associated User");
    }
  }
}

module.exports = CustomerRepository;
