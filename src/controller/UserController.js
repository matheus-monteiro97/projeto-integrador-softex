const user = require("../model/UserModel");

const database = require("../config/dbConnection");
database.sync();

class UserController {
  UserController = {
    loginVerification: async (req, res) => {},
  };
}

module.exports = UserController;
