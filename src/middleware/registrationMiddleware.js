const validator = require("validator");

class RegistrationMiddleware {
    static validateRegistration = (req, res, next) => {
        const {
          emailAddress,
          password,
          phoneNumber
        } = req.body;
      
        // Validar o formato do e-mail usando a biblioteca validator
        if (emailAddress && !validator.isEmail(emailAddress)) {
          return res.status(400).json({ error: "Invalid email address" });
        }
    
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

        if (password && password.length < 8 && !passwordRegex.test(password)) {
          return res.status(400).json({
            error: "Invalid password. It should contain at least one lowercase letter, one uppercase letter, one number, and one special character."
          });
        }

        if (phoneNumber && !validator.isNumeric(phoneNumber) && phoneNumber.length !== 11) {
            return res.status(400).json({ error: "Invalid phone number. It should have exactly 11 digits." });
        }
      
        next();
      };
}

module.exports = RegistrationMiddleware;


  