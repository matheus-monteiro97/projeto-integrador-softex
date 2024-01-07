const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const EmployeeController = require("../controller/employeeController");
const employeeController = new EmployeeController();

const CustomerController = require("../controller/customerController");
const customerController = new CustomerController();

router.use(bodyParser.json());

// CRUD EMPLOYEE e USER
router.post("/employee", employeeController.createEmployee);
router.get("/employee", employeeController.getAllEmployees);
router.get("/employee/:id", employeeController.getByIdEmployee);

// CRUD CUSTUMER e USER
router.post("/customer", customerController.createCustumer);
router.get("/customer", customerController.getAllCustomers);
router.get("/customer/:id", customerController.getByIdCustomer);

module.exports = router;
