const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const registrationMiddleware = require("../middleware/registrationMiddleware");
// const authenticateMiddleware = require("../middleware/authenticateMiddleware");

const UserController = require("../controller/userController");
const userController = new UserController();

const EmployeeController = require("../controller/employeeController");
const employeeController = new EmployeeController();

const CustomerController = require("../controller/customerController");
const customerController = new CustomerController();

const TicketController = require("../controller/ticketController");
const ticketController = new TicketController();

router.use(bodyParser.json());

//LOGIN e CRIAÇÃO DE USUÁRIOS
router.post("/login", userController.login );
router.post("/employee", registrationMiddleware.validateRegistration, employeeController.createEmployee);
router.post("/customer", registrationMiddleware.validateRegistration, customerController.createCustomer);

// router.use(authenticateMiddleware.authenticateJWT);

// CRUD EMPLOYEE e USER
router.get("/employee", employeeController.getAllEmployees);
router.get("/employee/:id", employeeController.getByIdEmployee);
router.put("/employee/:id", registrationMiddleware.validateRegistration, employeeController.updateEmployee);
router.delete("/employee/:id", employeeController.deleteEmployee);

// CRUD CUSTUMER e USER
router.get("/customer", customerController.getAllCustomers);
router.get("/customer/:id", customerController.getByIdCustomer);
router.put("/customer/:id",registrationMiddleware.validateRegistration, customerController.updateCustomer);
router.delete("/customer/:id", customerController.deleteCustomer);

// CRUD CALLED
router.post("/ticketCustomer/:customerId", ticketController.createTicketCustomer)
// router.post("/ticket", ticketController.createTicket);
router.get("/ticket", ticketController.getAllTickets);
router.get("/ticket/:id", ticketController.getByIdTicket);
router.put("/ticket/:id", ticketController.updateTicket);
router.delete("/ticket/:id", ticketController.deleteTicket);

module.exports = router;