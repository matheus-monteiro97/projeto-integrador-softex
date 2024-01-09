const ticketRepository = require("../repository/ticketRepository");

class TicketController {
  async createTicket(req, res) {
    try {
      const {
        id,
        idCustomer,
        idEmployee,
        creationDate,
        closingDate,
        titleTicket,
        problem,
        solution,
        description,
        priority,
        statusTicket,
        isActive,
      } = req.body;

      console.log("Received request with data:", req.body);

      const newTicket = await ticketRepository.createTicket({
        id,
        idCustomer,
        idEmployee,
        creationDate,
        closingDate,
        titleTicket,
        problem,
        solution,
        description,
        priority,
        statusTicket: "open",
        isActive: true,
      });

      console.log("Ticket created:", newTicket);

      return res.status(201).json(newTicket);
    } catch (error) {
      return res.status(500).json({ error: "Error creating Ticket" });
    }
  }

  async getAllTickets(res) {
    try {
      const tickets = await ticketRepository.getAllTickets();
      return res.status(200).json(tickets);
    } catch (error) {
      return res.status(500).json({ error: "Error getting Tickets" });
    }
  }

  async getByIdTicket(req, res) {
    try {
      const { id } = req.params;
      const ticket = await ticketRepository.getByIdTicket(id);
      return res.status(200).json(ticket);
    } catch (error) {
      return res.status(500).send({ error: "Error while retrieving Ticket" });
    }
  }

  async updateTicket(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedTicket = await ticketRepository.updateTicket(id, data);

      return res.json(updatedTicket);
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json({ success: false, message: "Error updating Ticket." });
    }
  }

  async deleteTicket(req, res) {
    try {
      const { id } = req.params;
      const deletedTicket = await ticketRepository.deleteTicket(id);

      return res.status(200).json(deletedTicket);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: "Error while deleting the Ticket" });
    }
  }
}

module.exports = TicketController;
