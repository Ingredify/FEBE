const {
  getRecipeByIdHandler,
  getRecipeHandler,
  addRatingHandler,
  removeRatingHandler,
  averageRatingHandler,
  getRatedRecipesByUserHandler,
  getUserRateValueHandler,
  getSearchRecipeHandler,
} = require('./recipe.handler');

const routes = [
  {
    path: '/recipe',
    method: 'GET',
    handler: getRecipeHandler,
    options: {
      auth: false,
    },
  },
  {
    path: '/recipe/{id}',
    method: 'GET',
    handler: getRecipeByIdHandler,
    options: {
      auth: false,
    },
  },

  //? RATING SECTION
  {
    path: '/recipe/{id}/rate',
    method: 'GET',
    handler: getUserRateValueHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    path: '/recipe/{id}/rate',
    method: 'POST',
    handler: addRatingHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    path: '/recipe/{id}/rate',
    method: 'DELETE',
    handler: removeRatingHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    path: '/recipe/{id}/average-rating',
    method: 'GET',
    handler: averageRatingHandler,
    options: {
      auth: false,
    },
  },
  {
    path: '/recipe/rated',
    method: 'GET',
    handler: getRatedRecipesByUserHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    path: '/recipe/search',
    method: 'GET',
    handler: getSearchRecipeHandler,
    options: {
      auth: false,
    },
  }
];

module.exports = routes;
