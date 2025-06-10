require('dotenv').config();

const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes')
const authPlugin = require('./plugins/auth');
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  });

  await server.register(authPlugin);
  console.log('\x1b[33m' + '[Ingredify] Auth plugin registered...' + '\x1b[0m');
  server.route(routes);
  console.log('\x1b[33m' + '[Ingredify] Auth routes registered...' + '\x1b[0m');
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
