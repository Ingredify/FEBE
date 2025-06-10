const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const signToken = (payload, expiresIn = '24h') => {
  return jwt.sign(payload, jwtSecret, { algorithm: 'HS256', expiresIn });
};

//? Sebenernya gak perlu karena kita pake hapi-auth-jwt2, just in case needed
const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret, { algorithms: ['HS256'] });
};

module.exports = { signToken, verifyToken };
