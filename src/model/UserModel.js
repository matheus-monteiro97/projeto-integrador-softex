const Sequelize = require("sequelize");
const database = require("../config/dbConnection");

class ClasseAbstrata {
  constructor() {
    if (this.constructor === ClasseAbstrata) {
      throw new Error("Essa classe não pode ser instanciada!");
    }
  }
}
class UserModel extends ClasseAbstrata {
  constructor() {
    super();
    this.user = database.define("user", {
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(14),
        unique: true,
        allowNull: false,
      },
      emailAddress: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(60),
        unique: true,
        allowNull: false,
      },
      dateRegistration: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      userType: {
        type: Sequelize.ENUM("Customer", "Employee"),
        allowNull: false,
      },
    });
  }
}

module.exports = UserModel;
