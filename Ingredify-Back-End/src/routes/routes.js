const authRoutes = require('./auth/auth.routes');
const collectionRoutes = require('./collection/collection.routes');
const machineLearningRoutes = require('./ml/recommendation.routes');
const recipeRoutes = require('./recipe/recipe.routes');

const routes = [
  ...authRoutes,
  ...collectionRoutes,
  ...machineLearningRoutes,
  ...recipeRoutes,
];

module.exports = routes;
