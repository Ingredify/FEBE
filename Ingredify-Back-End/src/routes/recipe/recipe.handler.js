const prisma = require('../../utils/prisma');

const getRecipeHandler = async (request, h) => {
  const { page = 1, limit = 5 } = request.query;
  const pageNumber = Number(page);
  const pageLimit = Number(limit);
  const skippedRecipes = (pageNumber - 1) * pageLimit;

  try {
    const totalRecipes = await prisma.recipe.count();

    if (skippedRecipes > totalRecipes) {
      const response = h.response({
        status: 'fail',
        message: 'Page not found',
      });
      response.code(404);
      return response;
    }

    const recipes = await prisma.recipe.findMany({
      skip: skippedRecipes,
      take: pageLimit,
    });

    const response = h.response({
      status: 'success',
      data: recipes,
      meta: {
        page: pageNumber,
        limit: pageLimit,
        totalRecipes: totalRecipes,
        totalPages: Math.ceil(totalRecipes / pageLimit),
      },
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const getRecipeByIdHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { foodId: id },
    });

    if (!recipe) {
      const response = h.response({
        status: 'fail',
        message: 'Recipe not found',
      });
      response.code(404);
      return response;
    }
    const response = h.response({
      status: 'success',
      data: recipe,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const addRatingHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;
  const { rating } = request.payload ?? {};

  if (!request.payload || Object.keys(request.payload).length === 0) {
    const response = h.response({
      status: 'fail',
      message: 'Rating is required',
    });
    response.code(400);
    return response;
  }

  try {
    if (rating > 5 || rating < 1) {
      const response = h.response({
        status: 'fail',
        message: 'Rating must be between 1 and 5',
      });
      response.code(400);
      return response;
    }

    const isRecipeExists = await prisma.recipe.findUnique({
      where: { id: Number(id) },
    });

    if (!isRecipeExists) {
      const response = h.response({
        status: 'fail',
        message: 'Recipe not found',
      });
      response.code(404);
      return response;
    }

    const userRating = await prisma.rating.upsert({
      where: {
        userId_recipeId: {
          userId: user.id,
          recipeId: Number(id),
        },
      },
      create: {
        userId: user.id,
        recipeId: Number(id),
        rating: rating,
      },
      update: {
        rating: rating,
      },
    });

    const response = h.response({
      status: 'success',
      data: userRating,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getUserRateValueHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;

  try {
    const userRating = await prisma.rating.findUnique({
      where: {
        userId_recipeId: {
          userId: user.id,
          recipeId: Number(id),
        },
      },
    });

    if (!userRating) {
      const response = h.response({
        status: 'fail',
        message: 'Rating not found for this recipe',
      });
      response.code(404);
      return response;
    }

    const userRatingValue = userRating.rating;

    const response = h.response({
      status: 'success',
      data: {
        ratingValue: userRatingValue,
      },
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
  }
};
const removeRatingHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;

  const isRecipeExists = await prisma.recipe.findUnique({
    where: { id: Number(id) },
  });

  if (!isRecipeExists) {
    const response = h.response({
      status: 'fail',
      message: 'Recipe not found',
    });
    response.code(404);
    return response;
  }

  try {
    await prisma.rating.delete({
      where: {
        userId_recipeId: {
          userId: user.id,
          recipeId: Number(id),
        },
      },
    });
    const response = h.response({
      status: 'success',
      message: 'Rating deleted successfully',
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const averageRatingHandler = async (request, h) => {
  const { id } = request.params;
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { foodId: id },
    });

    if (!recipe) {
      const response = h.response({
        status: 'fail',
        message: 'Recipe not found',
      });
      response.code(404);
      return response;
    }

    const ratings = await prisma.rating.findMany({
      where: { recipeId: recipe.id },
    });

    const averageRating =
      ratings.reduce((total, rating) => total + rating.rating, 0) /
      ratings.length;

    if (ratings.length === 0) {
      const response = h.response({
        status: 'success',
        data: {
          averageRating: 0,
          totalRating: 0,
          message: 'No ratings available for this recipe',
        },
      });
      response.code(200);
      return response;
    }
    const response = h.response({
      status: 'success',
      data: {
        averageRating: averageRating,
        totalRating: ratings.length,
      },
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const getRatedRecipesByUserHandler = async (request, h) => {
  const user = request.auth.credentials;
  try {
    const recipes = await prisma.rating.findMany({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        rating: true,
        createdAt: true,
        updatedAt: true,
        Recipe: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    const response = h.response({
      status: 'success',
      data: recipes,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const searchRecipesByIngredient = async (ingredient, skip, limit) => {
  const recipes = await prisma.$queryRawUnsafe(
    `
    SELECT *
    FROM "Recipe"
    WHERE EXISTS (
      SELECT 1
      FROM unnest("ingredients") AS ing
      WHERE ing ILIKE '%' || $1 || '%'
    )
    OFFSET $2
    LIMIT $3
    `,
    ingredient,
    skip,
    limit
  );

  return recipes;
};

const countRecipesByIngredient = async (ingredient) => {
  const countResult = await prisma.$queryRawUnsafe(
    `
    SELECT COUNT(*) AS total
    FROM "Recipe"
    WHERE EXISTS (
      SELECT 1
      FROM unnest("ingredients") AS ing
      WHERE ing ILIKE '%' || $1 || '%'
    )
    `,
    ingredient
  );

  return Number(countResult[0].total);
};

const getSearchRecipeHandler = async (request, h) => {
  const { ingredient, page = 1, limit = 10 } = request.query;

  if (!ingredient) {
    return h
      .response({
        status: 'fail',
        message: 'Ingredient query parameter is required',
      })
      .code(400);
  }

  const pageNumber = Number(page);
  const pageLimit = Number(limit);
  const skippedRecipes = (pageNumber - 1) * pageLimit;

  try {
    const totalRecipes = await countRecipesByIngredient(ingredient);

    if (skippedRecipes >= totalRecipes) {
      return h
        .response({
          status: 'fail',
          message: 'Page not found',
        })
        .code(404);
    }

    const recipes = await searchRecipesByIngredient(
      ingredient,
      skippedRecipes,
      pageLimit
    );

    return h
      .response({
        status: 'success',
        data: recipes,
        meta: {
          page: pageNumber,
          limit: pageLimit,
          totalRecipes,
          totalPages: Math.ceil(totalRecipes / pageLimit),
        },
      })
      .code(200);
  } catch (error) {
    console.error(error);
    return h
      .response({
        status: 'fail',
        message: 'Server error',
      })
      .code(500);
  }
};

module.exports = {
  getRecipeHandler,
  getRecipeByIdHandler,
  getUserRateValueHandler,
  addRatingHandler,
  removeRatingHandler,
  averageRatingHandler,
  getRatedRecipesByUserHandler,
  getSearchRecipeHandler,
};
