const jwt_hapi = require('hapi-auth-jwt2');
const prisma = require('../utils/prisma');
exports.plugin = {
  name: 'auth',
  version: '1.0.0',
  register: async (server) => {
    await server.register(jwt_hapi);
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET,
      validate: async (decoded) => {
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
        });
        return { isValid: !!user, credentials: user };
      },
      verifyOptions: { algorithms: ['HS256'] },
    });
    server.auth.default('jwt');
  },
};