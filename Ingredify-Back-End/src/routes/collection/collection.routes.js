const {
  getCollectionHandler,
  addCollectionHandler,
  getCollectionByIdHandler,
  editCollectionHandler,
  removeCollectionHandler,
  addRecipeToCollectionHandler,
  getCollectionRecipesHandler,
  removeRecipeFromCollectionHandler,
} = require('./collection.handler');

const routes = [
  {
    method: 'GET',
    path: '/collection/{id}',
    handler: getCollectionByIdHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'GET',
    path: '/collection',
    handler: getCollectionHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'POST',
    path: '/collection',
    handler: addCollectionHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'PUT',
    path: '/collection/{id}',
    handler: editCollectionHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/collection/{id}',
    handler: removeCollectionHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'POST',
    path: '/collection/recipe',
    handler: addRecipeToCollectionHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'GET',
    path: '/collection/{id}/recipe',
    handler: getCollectionRecipesHandler,
    options: {
      auth: 'jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/collection/recipe',
    handler: removeRecipeFromCollectionHandler,
    options: {
      auth: 'jwt',
    },
  },
];

module.exports = routes;
