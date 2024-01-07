const userModel = require("../model/userModel");
class UserRepository {
  static createUser = async function (data) {
    try {
      const newUser = await userModel.user.create(data);
      return newUser;
    } catch (error) {
      console.error("Error creating User:", error.message);
      throw new Error("Error creating User");
    }
  };
}

module.exports = UserRepository;
