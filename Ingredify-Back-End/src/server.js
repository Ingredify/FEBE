require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('./routes/auth/auth.routes');
const authPlugin = require('./plugins/auth');
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(authPlugin);
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
