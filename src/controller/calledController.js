const calledRepository = require("../repository/calledRepository");
class CalledController {
  async createCalled(req, res) {
    try {
      const {
        id,
        idCustomer,
        idEmployee,
        creationDate,
        closingDate,
        titleCalled,
        problem,
        solution,
        description,
        priority,
        statusCalled,
        isActive,
      } = req.body;

      console.log("Received request with data:", req.body);

      const newCalled = await calledRepository.createCalled({
        id,
        idCustomer,
        idEmployee,
        creationDate,
        closingDate,
        titleCalled,
        problem,
        solution,
        description,
        priority,
        statusCalled,
        isActive,
      });

      console.log("Employee created:", newEmployee);

      return res.status(201).json(newCalled);
    } catch (error) {
      return res.status(500).json({ error: "Error creating Called" });
    }
  }

  async getAllCalleds(res) {
    try {
      const calledes = await calledRepository.getAllCalledes();
      return res.status(200).json(calledes);
    } catch (error) {
      return res.status(500).json({ error: "Error getting Calledes" });
    }
  }

  async getByIdCalled(req, res) {
    try {
      const { id } = req.params;
      const called = await calledRepository.getByIdCalled(id);
      return res.status(200).json(called);
    } catch (error) {
      return res.status(500).send({ error: "Error while retrieving Called" });
    }
  }

  async updateCalled(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedcalled = await calledRepository.updateCalled(id, data);

      return res.json(updatedcalled);
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json({ success: false, message: "Error updating Called." });
    }
  }

  async deleteCalled(req, res) {
    try {
      const { id } = req.params;
      const deletedCalled = await calledRepository.deleteCalled(id);

      return res.status(200).json(deletedCalled);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: "Error while deleting the called" });
    }
  }
}

module.exports = CalledController;
