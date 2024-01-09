const employeeModel = require("../model/employeeModel");
const customerModel = require("../model/customerModel");
const ticketModel = require("../model/ticketModel");
const database = require("../../config/connectionDB");

class TicketRepository {
  static createTicket = async function (data) {
    try {
      const newTicket = await ticketModel.ticket.create(data);
      return newTicket;
    } catch (error) {
      console.error("Error creating Ticket:", error.message);
      throw new Error("Error creating Ticket");
    }
  };

  static async getAllTickets() {
    try {
      const tickets = await ticketModel.ticket.findAll({
        include: [
          {
            model: customerModel.customer,
            model: employeeModel.employee,
            required: true,
          },
        ],
      });
      return tickets;
    } catch (error) {
      console.log(error.message);
      throw new Error("Error retrieving all tickets:", error.message);
    }
  }

  static async getByIdTicket(id) {
    try {
      const ticket = await ticketModel.ticket.findOne({
        where: { id },
        include: [customerModel.customer, employeeModel.employee],
      });

      if (!ticket) {
        throw new Error("Ticket not found for the provided ID");
      }

      return ticket;
    } catch (error) {
      console.error("Error while fetching the Ticket:", error.message);
      throw new Error("Error while fetching the Ticket");
    }
  }

  static async updateTicket(id, data) {
    try {
      const ticket = this.getByIdTicket(id); //Reaproveitamento de método

      if (!ticket) {
        throw new Error("Called not found for the provided ID");
      }

      //Dados a serem atualizados
      const {
        employeeId,
        titleTicket,
        problem,
        solution,
        description,
        priority,
        statusTicket,
        isActive,
      } = data;

      //Informações de cada entidade
      const custumer = ticket.customer;
      const employee = ticket.employee;

      //Atualizar dados

      await custumer.update({
        titleTicket,
        problem,
        description,
      });

      await employee.update({
        employeeId,
        solution,
        priority,
        statusTicket,
        isActive,
      });

      return { success: true, message: "Ticket updated successfully." };
    } catch (error) {
      console.error("Error updating Ticket.", error.message);
      return { success: false, message: "Error updating Ticket." };
    }
  }

  static async deleteTicket(id) {
    const transaction = await database.transaction();

    try {
      const ticket = await ticketModel.ticket.findOne({
        where: { id }, //APENAS O CHAMADO DEVE SER DELETADO
        transaction,
      });

      if (!ticket) {
        throw new Error("Ticket not found for the provided ID");
      }

      // Excluir o Employee
      await ticket.destroy({ transaction });

      // Commit da transação
      await transaction.commit();

      return ticket;
    } catch (error) {
      // Rollback em caso de erro
      await transaction.rollback();

      console.error(
        "Error while deleting the Ticket:", error.message );
      throw new Error("Error while deleting the Ticket");
    }
  }
}

module.exports = TicketRepository;
