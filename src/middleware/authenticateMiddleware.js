const jwt = require('jsonwebtoken');


class AuthenticateMiddleware {

    static authenticateJWT = (req, res, next) => {
        const token = req.header('Authorization');
      
        if (!token) {
          return res.status(401).json({ message: "Unauthorized access. Token not provided." });
        }
      
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          
          if (err) {
            console.log(err.message)
            return res.status(403).json({ message: "Invalid token" });
          }
          req.user = user;
          next();
        });
      };
}


module.exports = AuthenticateMiddleware;
