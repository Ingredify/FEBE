const {
  getRecommendationHandler,
  getSimilarHandler,
} = require('./recommendation.handler');

const routes = [
  {
    method: 'GET',
    path: '/recommendation',
    handler: getRecommendationHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'GET',
    path: '/similar/{id}',
    handler: getSimilarHandler,
    options: {
      auth: 'jwt',
    },
  },
];

module.exports = routes;
