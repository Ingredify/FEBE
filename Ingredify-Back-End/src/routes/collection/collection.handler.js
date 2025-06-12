const prisma = require('../../utils/prisma');

const addCollectionHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { name, description = '' } = request.payload ?? {};

  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'name is required',
    });
    response.code(400);
    return response;
  }

  try {
    const newCollection = await prisma.collection.create({
      data: {
        name: name,
        description: description,
        userId: user.id,
      },
    });
    const response = h.response({
      status: 'success',
      message: 'Collection created',
      data: {
        collection: newCollection,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const getCollectionHandler = async (request, h) => {
  const user = request.auth.credentials;
  try {
    const userCollection = await prisma.collection.findMany({
      where: { userId: user.id },
      select: {
        name: true,
        description: true,
        id: true,
        createdAt: true,
        _count: {
          select: {
            CollectionRecipe: true,
          },
        },
      },
    });

    const userCollectionWithRecipeCount = userCollection.map((collection) => ({
      id: collection.id,
      name: collection.name,
      description: collection.description,
      createdAt: collection.createdAt,
      recipeCount: collection._count.CollectionRecipe,
    }));
    const response = h.response({
      status: 'success',
      data: userCollectionWithRecipeCount,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const getCollectionByIdHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;
  try {
    const collection = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        id: Number(id),
      },
    });
    if (!collection) {
      const response = h.response({
        status: 'fail',
        message: 'Collection not found',
      });
      response.code(404);
      return response;
    }
    const response = h.response({
      status: 'success',
      data: collection,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const editCollectionHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;
  const { name, description } = request.payload ?? {};

  if (!request.payload || Object.keys(request.payload).length === 0) {
    const response = h.response({
      status: 'fail',
      message: 'name or description is required',
    });
    response.code(400);
    return response;
  }

  try {
    const collection = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        id: Number(id),
      },
    });
    if (!collection) {
      const response = h.response({
        status: 'fail',
        message: 'Collection not found',
      });
      response.code(404);
      return response;
    }
    await prisma.collection.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name ?? collection.name,
        description: description ?? collection.description,
      },
    });

    const response = h.response({
      status: 'success',
      message: 'Collection updated successfully',
    });

    response.code(200);
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const removeCollectionHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;

  try {
    const collection = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        id: Number(id),
      },
    });
    if (!collection) {
      const response = h.response({
        status: 'fail',
        message: 'Collection not found',
      });
      response.code(404);
      return response;
    }

    await prisma.collectionRecipe.deleteMany({
      where: {
        collectionId: Number(id),
      },
    });

    await prisma.collection.delete({
      where: {
        id: Number(id),
      },
    });
    
    const response = h.response({
      status: 'success',
      message: 'Collection deleted successfully',
    });
    response.code(200);
    return response;
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};
const addRecipeToCollectionHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { collectionId, recipeId } = request.payload ?? {};

  if (!request.payload || Object.keys(request.payload).length === 0) {
    const response = h.response({
      status: 'fail',
      message: 'collectionId and recipeId is required',
    });
    response.code(400);
    return response;
  }

  try {
    const collection = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        id: Number(collectionId),
      },
    });

    if (!collection) {
      const response = h.response({
        status: 'fail',
        message: 'Collection not found or does not belong to user',
      });
      response.code(404);
      return response;
    }

    const recipe = await prisma.recipe.findUnique({
      where: { id: Number(recipeId) },
    });

    if (!recipe) {
      const response = h.response({
        status: 'fail',
        message: 'Recipe not found',
      });
      response.code(404);
      return response;
    }

    const addedRecipetoCollection = await prisma.collectionRecipe.create({
      data: {
        collectionId: Number(collectionId),
        recipeId: Number(recipeId),
      },
    });

    return h.response({
      status: 'success',
      data: addedRecipetoCollection,
    });
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const getCollectionRecipesHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { id } = request.params;

  try {
    const collection = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        id: Number(id),
      },
    });

    if (!collection) {
      const response = h.response({
        status: 'fail',
        message: 'Collection not found or does not belong to user',
      });
      response.code(404);
      return response;
    }

    const recipes = await prisma.collectionRecipe.findMany({
      where: {
        collectionId: Number(id),
      },
      select: {
        id: true,

        recipe: {
          select: {
            id: true,
            name: true,
            image: true,
            foodId: true,
          },
        },
      },
    });

    return h.response({
      status: 'success',
      data: recipes,
    });
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

const removeRecipeFromCollectionHandler = async (request, h) => {
  const user = request.auth.credentials;
  const { collectionId, recipeId } = request.payload ?? {};

  if (!request.payload || Object.keys(request.payload).length === 0) {
    const response = h.response({
      status: 'fail',
      message: 'collectionId and recipeId is required',
    });
    response.code(400);
    return response;
  }

  try {
    const collection = await prisma.collection.findFirst({
      where: {
        userId: user.id,
        id: Number(collectionId),
      },
    });

    if (!collection) {
      const response = h.response({
        status: 'fail',
        message: 'Collection not found or does not belong to user',
      });
      response.code(404);
      return response;
    }

    const recipe = await prisma.recipe.findUnique({
      where: { id: Number(recipeId) },
    });

    if (!recipe) {
      const response = h.response({
        status: 'fail',
        message: 'Recipe not found',
      });
      response.code(404);
      return response;
    }

    await prisma.collectionRecipe.delete({
      where: {
        collectionId_recipeId: {
          collectionId: Number(collectionId),
          recipeId: Number(recipeId),
        },
      },
    });

    return h.response({
      status: 'success',
      message: 'Recipe removed from collection successfully',
    });
  } catch (error) {
    console.log(error);
    const response = h.response({
      status: 'fail',
      message: 'Server error',
    });
    response.code(500);
    return response;
  }
};

module.exports = {
  getCollectionHandler,
  addCollectionHandler,
  getCollectionByIdHandler,
  editCollectionHandler,
  removeCollectionHandler,
  addRecipeToCollectionHandler,
  getCollectionRecipesHandler,
  removeRecipeFromCollectionHandler,
};
