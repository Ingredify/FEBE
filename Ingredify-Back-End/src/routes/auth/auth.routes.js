const {
  registerHandler,
  loginHandler,
  getUserHandler,
} = require('./auth.handler');
const routes = [
  {
    method: 'POST',
    path: '/register',
    handler: registerHandler,
    options: {
      auth: false,
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
  {
    method: 'GET',
    path: '/users',
    handler: getUserHandler,
    options: {
      auth: 'jwt',
    },
  },
];

module.exports = routes;
