const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const signToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, jwtSecret, { algorithm: 'HS256', expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret, { algorithms: ['HS256'] });
};

module.exports = { signToken, verifyToken };
