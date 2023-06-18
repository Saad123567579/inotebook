var jwt = require("jsonwebtoken");
const JWT_SECRET = "MySecretKey123!";

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ error: 'Please authenticate using a valid token' });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next(); // Add this line to call the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: 'Please authenticate using a valid token' });
  }
}

module.exports = fetchuser;
