const MODEL_URL = process.env.MODEL_URL;
const CLOUD_STORAGE_URL = process.env.CLOUD_STORAGE_URL;
const getRecommendationHandler = async (request, h) => {
  const user = request.auth.credentials;
  try {
    const recommendation = await fetch(`${MODEL_URL}/recommend/${user.id}`, {
      method: 'GET',
    });

    if (!recommendation.ok) {
      const response = h.response({
        status: 'fail',
        message: 'Server error',
      });
      response.code(500);
      return response;
    }
    const rawData = await recommendation.json();
    const filteredData = rawData.map(({ food_id, title, image_name }) => ({
      foodId:food_id,
      name: title,
      image: `${CLOUD_STORAGE_URL}/${image_name}`,
    }));

    //Permintaan tim ML
    const shuffleFilteredData = shuffleArray(filteredData);

    const response = h.response({
      status: 'success',
      data: shuffleFilteredData,
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

const getSimilarHandler = async (request, h) => {
  request.auth.credentials;
  const { id } = request.params;
  try {
    const similiarRecipe = await fetch(`${MODEL_URL}/similar/${id}`, {
      method: 'GET',
    });

    if (!similiarRecipe.ok) {
      if (similiarRecipe.status === 404) {
        const response = h.response({
          status: 'fail',
          message: 'Recipe not found',
        });
        response.code(404);
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Server error',
      });
      response.code(500);
      return response;
    }

    const rawData = await similiarRecipe.json();
    const filteredData = rawData.map(({ food_id, title, image_name }) => ({
      food_id,
      food_name: title,
      image_url: `${CLOUD_STORAGE_URL}/${image_name}`,
    }))

    const shuffleFilteredData = shuffleArray(filteredData);

    const response = h.response({
      status: 'success',
      data: shuffleFilteredData,
    });
    response.code(200);
    return response;
  } catch (error) {
    console.error(error);
  }
};
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

module.exports = {
  getRecommendationHandler,
  getSimilarHandler,
};
