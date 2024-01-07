const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const EmployeeController = require("../controller/employeeController");
const employeeController = new EmployeeController();

const CustomerController = require("../controller/customerController");
const custumerController = new CustomerController();

const CalledController = require("../controller/calledController");
const calledController = new CalledController();

router.use(bodyParser.json());

// CRUD EMPLOYEE e USER
router.post("/employee", employeeController.createEmployee);
router.get("/employee", employeeController.getAllEmployees);
router.get("/employee/:id", employeeController.getByIdEmployee);
router.put("/employee/:id", employeeController.updateEmployee);
router.delete("/employee/:id", employeeController.deleteEmployee);

// CRUD CUSTUMER e USER
router.post("/customer", customerController.createCustumer);
router.get("/customer", customerController.getAllCustomers);
router.get("/customer/:id", customerController.getByIdCustomer);
router.put("/customer/:id",customerController.updateCustomer);
router.delete("/customer/:id", customerController.deleteCustomer);

// CRUD CALLED
router.post("/called", calledController.createCalled);
router.get("/called", calledController.getAllCalleds);
router.get("/called/:id", calledController.getByIdCalled);
router.put("/called/:id", calledController.updateCalled);
router.delete("/called/:id", calledController.deleteCalled);

module.exports = router;
