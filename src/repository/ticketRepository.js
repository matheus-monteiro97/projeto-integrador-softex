const employeeModel = require("../model/employeeModel");
const customerModel = require("../model/customerModel");
const ticketModel = require("../model/ticketModel");
const database = require("../../config/connectionDB");

class TicketRepository {

  static createTicketEmployee = async function (employeeId, data) {
      try {
        const {customerId, closingDate ,titleTicket, problem, solution, description, priority, statusTicket } = data
        const employee = await employeeModel.employee.findByPk(employeeId)

        if (!employee) {
          throw new Error(`Employee with id ${employeeId} does not exist.`);
        }
        const openedBy = "Employee"

        const customer = await customerModel.customer.findByPk(customerId)

        if (!customer) {
          throw new Error(`Customer with id ${customerId} does not exist.`);
        }

        if (statusTicket === "close") {
          if (!problem || !solution || !closingDate) {
            throw new Error("Fields 'problem', 'solution' and 'closingDate' are required when statusTicket is 'close'.");
          }
        }

        if (statusTicket !== "close") {
          if (solution || closingDate) {
              throw new Error("Closing date and solution can only be filled in when the ticket status is closed.")
          }
        }

        const newTicketEmployee = await ticketModel.ticket.create({
          customerId, employeeId, openedBy, closingDate, titleTicket, problem, solution, description, priority, statusTicket 
        })

        return newTicketEmployee
      } catch (error) {
        console.error("Error creating Ticket:", error.message);
        throw new Error("Error creating Ticket");
      }
  }

  static createTicketCustomer = async function (customerId, data) {
    try {
        const {titleTicket, description} = data

        const customer = await customerModel.customer.findByPk(customerId)

        if (!customer) {
          throw new Error(`Customer with id ${customerId} does not exist.`);
        }

        const openedBy = "Customer" 

        const newTicketCustomer = await ticketModel.ticket.create({
          customerId, openedBy, titleTicket, description
        })

        return newTicketCustomer;
    } catch (error) {
        console.error("Error creating Ticket:", error.message);
        throw new Error("Error creating Ticket");
    }  
  }

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

  static async updateTicketEmployee (id, data) {
    try {
      const {closingDate ,titleTicket, problem, solution, priority, statusTicket } = data
      const ticket = await this.getByIdTicket(id)
  
      if (!ticket) {
        throw new Error("Ticket not found for the provided ID");
      }
  
      if (statusTicket === "close") {
        if (!problem || !solution || !closingDate) {
          throw new Error("Fields 'problem', 'solution' and 'closingDate' are required when statusTicket is 'close'.");
        }
      }
  
      if (statusTicket !== "close") {
        if (solution || closingDate) {
            throw new Error("Closing date and solution can only be filled in when the ticket status is closed.")
        }
      }
  
      const updatedTicketEmployee = await ticketModel.ticket.update({closingDate ,titleTicket, problem, solution, priority, statusTicket })
  
        return { success: true, message: "Ticket updated successfully." , updatedTicketEmployee };
      } catch (error) {
        console.error("Error updating Ticket.", error.message);
        return { success: false, message: "Error updating Ticket." };
      }
    }

  static async updateTicketCustomer (id, data) {
    try {
      const {titleTicket, description} = data
      const ticket = await this.getByIdTicket(id); //Reaproveitamento de método

      if (!ticket) {
        throw new Error("Ticket not found for the provided ID");
      }

      const updatedTicketCustomer = await ticketModel.ticket.update({titleTicket, description})

      return { success: true, message: "Ticket updated successfully." , updatedTicketCustomer };
    } catch (error) {
      console.error("Error updating Ticket.", error.message);
      return { success: false, message: "Error updating Ticket." };
    }
  }

  // static async updateTicket(id, data) {
  //   try {
  //     const ticket = this.getByIdTicket(id); //Reaproveitamento de método

  //     if (!ticket) {
  //       throw new Error("Ticket not found for the provided ID");
  //     }

  //     //Dados a serem atualizados
  //     const {
  //       employeeId,
  //       titleTicket,
  //       problem,
  //       solution,
  //       description,
  //       priority,
  //       statusTicket,
  //       isActive,
  //     } = data;

  //     //Informações de cada entidade
  //     const custumer = ticket.customer;
  //     const employee = ticket.employee;

  //     //Atualizar dados

  //     await custumer.update({
  //       titleTicket,
  //       problem,
  //       description,
  //     });

  //     await employee.update({
  //       employeeId,
  //       solution,
  //       priority,
  //       statusTicket,
  //       isActive,
  //     });

  //     return { success: true, message: "Ticket updated successfully." };
  //   } catch (error) {
  //     console.error("Error updating Ticket.", error.message);
  //     return { success: false, message: "Error updating Ticket." };
  //   }
  // }

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
