const ticketRepository = require("../repository/ticketRepository");

class TicketController {

  async createTicketEmployee (req, res) {
    try {
      const {employeeId} = req.params; 
      const data = req.body; 

      const newTicket = await ticketRepository.createTicketEmployee(employeeId, data);
      res.status(201).json(newTicket);
    } catch (error) {
      console.error("Error creating ticket:", error.message);
      res.status(500).json({ error: "Error creating ticket" });
    }
  }

  async createTicketCustomer (req, res) {
    try {
      const {customerId} = req.params; 
      const data = req.body; 

      const newTicket = await ticketRepository.createTicketCustomer(customerId, data);
      res.status(201).json(newTicket);
    } catch (error) {
      console.error("Error creating ticket:", error.message);
      res.status(500).json({ error: "Error creating ticket" });
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

  async updateTicketEmployee (req, res) {
      try {
        const {id} = req.params
        const data = req.body

        const updatedTicketEmployee = await ticketRepository.updateTicketEmployee(id, data)
        return res.status(200).json({ success: true, message: "Ticket updated successfully.", updatedTicketEmployee });
      } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json({ success: false, message: "Error updating Ticket." });
    }
  }

  async updateTicketCustomer (req, res){
    try {
      const {id} = req.params
      const data = req.body

      const updatedTicketCustomer = await ticketRepository.updateTicketCustomer(id, data)
      return res.status(200).json({ success: true, message: "Ticket updated successfully.", updatedTicketCustomer });
    } catch (error) {
    console.error(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error updating Ticket." });
  }
  }

  // async updateTicket(req, res) {
  //   try {
  //     const { id } = req.params;
  //     const data = req.body;

  //     const updatedTicket = await ticketRepository.updateTicket(id, data);

  //     return res.json(updatedTicket);
  //   } catch (error) {
  //     console.error(error.message);
  //     return res
  //       .status(500)
  //       .json({ success: false, message: "Error updating Ticket." });
  //   }
  // }

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
