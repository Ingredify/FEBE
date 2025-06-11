import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import MenuButton from '../elements/MenuButton';
import BackgroundImgFood from '../elements/BackgroundImgFood';
import LoveButton from '../elements/LoveButton';
import { Link, useParams } from 'react-router-dom';
import StarRating from '../elements/StarRating';
import { fetchRecipeDetail } from '../../presenter/DetailPresenter';

const DetailRecipePage = () => {
  // const [showSidebar, setShowSidebar] = useState(false);
  const [yourRating, setYourRating] = useState(0);
  const [liked, setLiked] = useState(false);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    if (id) {
      fetchRecipeDetail(setRecipe, setLoading, setError, id);
    }
  }, [id]);

  const handleToggleLike = (folderId) => {
    // Simulasi simpan ke backend pakai folderId
    console.log('Disimpan ke folder:', folderId);
    setLiked(true);
  };

  return (
    <section className="relative w-full overflow-visible">
      <Navbar />
      <div className="mt-7 flex px-7 py-9 lg:px-24">
        {/* <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} /> */}
        {loading ? (
          <p className="mt-20 w-full animate-spin text-center">Loading...</p>
        ) : error ? (
          <p className="mt-20 w-full text-center text-red-500">Error: {error}</p>
        ) : !recipe ? (
          <p className="mt-20 w-full text-center text-gray-500">No recipe found.</p>
        ) : (
          <div className="font-montserrat mt-3 w-full">
            <Link
              to="/home"
              className="text-light-green group flex w-fit cursor-pointer items-center gap-1.5"
            >
              <i className="fa-solid fa-chevron-left h-4"></i>
              <span className="font-semibold group-hover:underline">Back</span>
            </Link>
            <div className="mt-3 lg:flex">
              <div className="w-full">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full rounded-sm object-cover"
                />
              </div>
              <div className="mt-3 w-full lg:mt-0 lg:ml-5">
                <div className="mb-4 block justify-between md:flex">
                  <div className="flex flex-row items-center justify-between gap-1 md:flex-col md:items-start md:justify-start">
                    <div className="flex gap-1">
                      <h1 className="text-custom-black w-fit text-lg font-semibold lg:text-2xl">
                        {recipe.name}
                      </h1>
                      <LoveButton liked={liked} onToggle={handleToggleLike} />
                    </div>
                  </div>
                </div>

                <div className="text-custom-black mt-2 flex flex-col justify-between lg:flex-row">
                  <div>
                    <p className="font-medium">Ingredients</p>
                    <div>
                      <ul className="list-disc pl-4.5 text-sm">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li className="tracking-wider" key={index}>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between md:mt-0 md:block lg:mt-2">
                    <div className="mb-2">
                      <p className="text-custom-gray mb-1 text-xs">Average Rating (170)</p>
                      <StarRating rating={4.3} starSize={'text-lg'} />
                    </div>
                    <div>
                      <p className="text-custom-gray mb-1 text-end text-xs md:text-start">
                        Your Rating
                      </p>
                      <StarRating
                        rating={yourRating}
                        editable={true}
                        onRatingChange={(newRating) => setYourRating(newRating)}
                        starSize={'text-lg'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-custom-black mt-4 border-t-1 border-dashed pt-2">
              <p className="font-medium">Instructions</p>
              <div>
                <ol className="list-decimal pl-4.5 text-sm text-shadow-2xs">
                  {recipe.instructions.map((instruction, index) => (
                    <li className="tracking-wider" key={index}>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <MenuButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
      <BackgroundImgFood />
      <Footer />
    </section>
  );
};

export default DetailRecipePage;
