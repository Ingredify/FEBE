import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import MenuButton from '../elements/MenuButton';
import BackgroundImgFood from '../elements/BackgroundImgFood';
import LoveButton from '../elements/LoveButton';
import { Link } from 'react-router-dom';
import StarRating from '../elements/StarRating';

const DetailRecipePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [yourRating, setYourRating] = useState(0);
  const [liked, setLiked] = useState(false);

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
        <div className="font-montserrat mt-3 w-full">
          <Link
            to="/home"
            className="text-light-green group flex w-fit cursor-pointer items-center gap-1.5"
          >
            <i class="fa-solid fa-chevron-left h-4"></i>
            <span className="font-semibold group-hover:underline">Back</span>
          </Link>
          <div className="mt-3 lg:flex">
            <div className="w-full">
              <img src="./img/demoImg.jpg" alt="Food Image" className="rounded-sm object-cover" />
            </div>
            <div className="mt-3 w-full lg:mt-0 lg:ml-5">
              <div className="mb-4 block justify-between md:flex">
                <div className="flex flex-row items-center justify-between gap-1 md:flex-col md:items-start md:justify-start">
                  <div className="flex items-center gap-1">
                    <h1 className="text-custom-black w-fit text-lg font-semibold lg:text-2xl">
                      Moza Chicken
                    </h1>
                    <LoveButton liked={liked} onToggle={handleToggleLike} />
                  </div>

                  <div>
                    <p className="text-light-green mb-2 flex items-center gap-0.5 text-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span className="text-custom-gray">30 Mins</span>
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex justify-between md:mt-0 md:block">
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
              <p className="text-custom-gray text-xs">
                a Healthy an a Healthy and colorful stir fry with fresh vegetables and a savory
                souce. Lorem, ipsum dolor sit amet consectetur adipisicing d colorful stir fry with
                fresh vegetables and a savory souce. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, soluta.
              </p>
              <div className="text-custom-black mt-2">
                <p className="font-medium">Ingredients</p>
                <div>
                  <ul className="list-disc pl-4.5 text-sm">
                    <li>300g fettuccine pasta</li>
                    <li>2 chicken breasts, boneless and skinless</li>
                    <li>2 tbsp olive oil</li>
                    <li>2 cloves garlic, minced</li>
                    <li>1 cup heavy cream</li>
                    <li>1 cup Parmesan cheese, grated</li>
                    <li>2 tbsp butter</li>
                    <li>Salt and pepper to taste</li>
                    <li>Fresh parsley, chopped (for garnish)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-custom-black mt-4 border-t-1 border-dashed pt-2">
            <p className="font-medium">Instructions</p>
            <div>
              <ol className="list-decimal pl-4.5 text-sm text-shadow-2xs">
                <li>
                  Season chicken breasts with salt and pepper. Grill or pan-fry until cooked
                  through. Slice into strips.
                </li>
                <li>Cook fettuccine according to package instructions. Drain and set aside.</li>
                <li>
                  In a large skillet, heat olive oil over medium heat. Add minced garlic and sauté
                  until fragrant.
                </li>
                <li>Add heavy cream and butter. Bring to a simmer.</li>
                <li>Stir in Parmesan cheese until melted and sauce is smooth.</li>
                <li>Add cooked pasta to the sauce and toss to coat.</li>
                <li>Add sliced chicken and gently mix.</li>
                <li>Season with salt and pepper. Garnish with fresh parsley before serving.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* <MenuButton showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
      <BackgroundImgFood />
      <Footer />
    </section>
  );
};

export default DetailRecipePage;
