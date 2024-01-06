const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const EmployeeController = require("../controller/employeeController");
const employeeController = new EmployeeController;

const CustomerController = require("../controller/customerController");
const customerController = new CustomerController;

router.use(bodyParser.json());

// CRUD EMPLOYEE e USER
router.post("/employee", employeeController.createEmployee);

// CRUD EMPLOYEE e USER
router.post("/customer", customerController.createCustumer);

module.exports = router;
