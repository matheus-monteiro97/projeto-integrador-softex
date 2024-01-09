const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserRepository {
  static createUser = async function (data) {
    try {
      const newUser = await userModel.user.create(data);
      return newUser;
    } catch (error) {
      console.error("Error creating User:", error.message);
      // throw new Error("Error creating User");
    }
  };

  static async login(emailAddress, password) {
    try {
      // Buscar o usuário pelo endereço de e-mail
      const user = await userModel.user.findOne({ where: { emailAddress } });

      // Verificar se o usuário existe
      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      // Verificar se a senha está correta
      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) {
        throw new Error('Senha incorreta');
      }

      // Criar um token JWT
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return { user, token };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
