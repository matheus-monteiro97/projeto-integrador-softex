const express = require("express");
const app = express();
const router = require("./src/router/router");
const database = require("./config/connectionDB");
const employee = require("./src/model/employeeModel");
const customer = require("./src/model/customerModel");
const ticket = require("./src/model/ticketModel");
require("dotenv").config()

app.use("/", router);

employee.associate();
customer.associate();
ticket.associate();

database
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Erro ao sincronizar modelos com o banco de dados:", error);
  });