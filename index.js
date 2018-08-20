'use-strict';

const Hapi = require('hapi');

const server = Hapi.server({
  port: 3010,
  host: 'localhost'
});

const init = async () => {
  server.route({
    method: 'GET',
    path: '/fuego',
    handler: request => {
      return {fuego: Math.random() >= 0.5};
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
