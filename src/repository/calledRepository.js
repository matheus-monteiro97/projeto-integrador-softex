const employeeModel = require("../model/employeeModel");
const customerModel = require("../model/customerModel");
const calledModel = require("../model/calledModel");
const database = require("../../config/connectionDB");

class CalledRepository {
  static createCalled = async function (data) {
    try {
      const newCalled = await calledModel.called.create(data);
      return newCalled;
    } catch (error) {
      console.error("Error creating Called:", error.message);
      throw new Error("Error creating Called");
    }
  };

  static async getAllCalledes() {
    try {
      const calledes = await calledModel.called.findAll({
        include: [
          {
            model: customerModel.customer,
            model: employeeModel.employee,
            required: true,
          },
        ],
      });
      return calledes;
    } catch (error) {
      console.log(error.message);
      throw new Error("Error retrieving all calleds:", error.message);
    }
  }

  static async getByIdCalled(id) {
    try {
      const called = await calledModel.called.findOne({
        where: { id },
        include: [customerModel.customer, employeeModel.employee],
      });

      if (!called) {
        throw new Error("Called not found for the provided ID");
      }

      return called;
    } catch (error) {
      console.error("Error while fetching the Called:", error.message);
      throw new Error("Error while fetching the Called");
    }
  }

  static async updateCalled(id, data) {
    try {
      const called = this.getByIdCalled(id); //Reaproveitamento de método

      if (!called) {
        throw new Error("Called not found for the provided ID");
      }

      //Dados a serem atualizados
      const {
        employeeId,
        titleCalled,
        problem,
        solution,
        description,
        priority,
        statusCalled,
        isActive,
      } = data;

      //Informações de cada entidade
      const custumer = called.customer;
      const employee = called.employee;

      //Atualizar dados

      await custumer.update({
        titleCalled,
        problem,
        description,
      });

      await employee.update({
        employeeId,
        solution,
        priority,
        statusCalled,
        isActive,
      });

      return { success: true, message: "Called updated successfully." };
    } catch (error) {
      console.error("Error updating called.", error.message);
      return { success: false, message: "Error updating called." };
    }
  }

  static async deleteEmployee(id) {
    const transaction = await database.transaction();

    try {
      const called = await calledModel.called.findOne({
        where: { id }, //APENAS O CHAMADO DEVE SER DELETADO
        transaction,
      });

      if (!called) {
        throw new Error("Called not found for the provided ID");
      }

      // Excluir o Employee
      await called.destroy({ transaction });

      // Commit da transação
      await transaction.commit();

      return called;
    } catch (error) {
      // Rollback em caso de erro
      await transaction.rollback();

      console.error(
        "Error while deleting the Called and associated User:",
        error.message
      );
      throw new Error("Error while deleting the Called");
    }
  }
}

module.exports = CalledRepository;
