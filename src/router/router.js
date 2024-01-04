const express = require("express");
const router = express.Router();
const EmployeeController = require("../controller/employeeController");
const employeeController = new EmployeeController
const bodyParser = require("body-parser");


router.use(bodyParser.json());

// CRUD EMPLOYEE e USER
router.post("/employee", employeeController.createEmployee);

  

module.exports = router;