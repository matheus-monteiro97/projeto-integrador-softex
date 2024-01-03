const express = require("express");
const router = express.Router();
const calledController = require("../controller/calledController");
const customerController = require("../controller/customerController");
const userController = require("../controller/UserController");
const EmployeeController = require("../controller/employeeController");
const employeeController = new EmployeeController
router.use(express.json());
// CRUD EMPLOYEE
router.post("/employee", employeeController.createEmployee);

module.exports = router;