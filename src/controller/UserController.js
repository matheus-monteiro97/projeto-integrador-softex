const userRepository = require("../repository/userRepository");

class UserController {

    async login(req, res) {
    const { emailAddress, password } = req.body;
  
    try {
      const { user, token } = await userRepository.login(emailAddress, password);
  
      res.json({ user, token });
    } catch (error) {
      console.error('Erro no login:', error.message);
      res.status(401).json({ error: 'Falha na autenticação' });
    }
  };
}

module.exports = UserController
