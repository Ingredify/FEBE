const {
  registerHandler,
  loginHandler,
} = require('./auth.handler');
const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: registerHandler,
    options: {
      auth: false,
      description: 'Register new user',
      tags: ['api'],
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
    options: {
      auth: false,
    },
  },
];

module.exports = routes;
