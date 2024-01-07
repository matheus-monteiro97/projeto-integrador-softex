//const user = require("../model/userModel");

const database = require("../../config/connectionDB");
database.sync();

class UserController {
  UserController = {
    loginVerification: async (req, res) => {},
  };
}

module.exports = UserController;

// const UserRepository = require ("../repository/userRepository");

// class UserController {
//     async createUser (req, res) {
//       try {

//         const {
//           emailAddress,
//           password,
//           dateRegistration,
//           userType,
//           isActive,
//         } = req.body;

//         console.log("Received request with data:", req.body);

//         const newUser = await UserRepository.createUser ({
//           emailAddress,
//           password,
//           dateRegistration,
//           userType,
//           isActive,
//         });

//         console.log("User created:", newUser);
//         return res.status(201).json(newUser);

//     } catch (error) {
//         console.error("Error creating User:", error);
//         return res.status(500).json({ error: "Error creating User" });
//     }
//     }
// }

// module.exports = UserController;
