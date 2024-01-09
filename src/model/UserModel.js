const sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const database = require("../../config/connectionDB");

class UserModel {
  static user = database.define("user", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    emailAddress: {
      type: sequelize.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING(60),
      allowNull: false,
    },
    userType: {
      type: sequelize.ENUM("Customer", "Employee"),
      allowNull: false,
    },
    isActive: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    hooks: {
      beforeCreate: async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      },
    },
  });
}

module.exports = UserModel;
