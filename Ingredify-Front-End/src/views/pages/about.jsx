import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';
import BackgroundImgFood from '../elements/BackgroundImgFood';

const teamMembers = [
  {
    name: 'Shinzi',
    role: 'Backend Developer',
    photoURL: 'img/team/user.jpg',
    university: 'Universitas Tarumanagara',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio inventore ab iusto accusantium quidem in qui vel laudantium necessitatibus, commodi optio facilis.',
    github: 'https://github.com/Shinzi04',
    linkedin: 'https://www.linkedin.com/in/shinzi-tjai-7b5418252/',
  },
  {
    name: 'Jonathan Kennedy Torsandy',
    role: 'Frontend Developer',
    photoURL: 'img/team/user.jpg',
    university: 'Universitas Tarumanagara',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio inventore ab iusto accusantium quidem in qui vel laudantium necessitatibus, commodi optio facilis.',
    github: 'https://github.com/Jeqaa',
    linkedin: 'https://www.linkedin.com/in/jonathan-kennedy-t/',
  },
  {
    name: 'Benevito Kevin Sebastian Hariandja',
    role: 'Machine Learning Engineer',
    photoURL: 'img/team/user.jpg',
    university: 'Universitas Tarumanagara',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio inventore ab iusto accusantium quidem in qui vel laudantium necessitatibus, commodi optio facilis.',
    github: 'https://github.com/Benevito535220222',
    linkedin: 'https://www.linkedin.com/in/benevito-kevin-sebastian-hariandja-880909351/',
  },
  {
    name: 'Aulia Dwi Yulianti',
    role: 'Machine Learning Engineer',
    photoURL: 'img/team/user.jpg',
    university: 'Universitas Tarumanagara',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio inventore ab iusto accusantium quidem in qui vel laudantium necessitatibus, commodi optio facilis.',
    github: 'https://github.com/aauliadwi',
    linkedin: 'https://www.linkedin.com/in/auliadwiylnti/',
  },
  {
    name: 'Given Putra',
    role: 'Machine Learning Engineer',
    photoURL: 'img/team/user.jpg',
    university: 'Universitas Tarumanagara',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio inventore ab iusto accusantium quidem in qui vel laudantium necessitatibus, commodi optio facilis.',
    github: 'https://github.com/MC325D5Y0398',
    linkedin: 'https://www.linkedin.com/in/given-putra',
  },
];

const aboutPage = () => {
  // const teamCards = teamMembers.map((member) => (
  //   <TeamCard key={member.name} name={member.name} role={member.role} />
  // ));
  return (
    <section className="font-montserrat text-custom-black relative bg-white">
      <Navbar />
      <div className="w-full lg:mt-12">
        <div className="about-img-background py-24 text-center">
          <img src="./pwa-icon-192x.png" alt="logo" className="mx-auto h-14" />
          <h1 className="my-2 text-3xl font-bold">About Ingredify</h1>
          <p className="text-custom-gray mx-auto px-6 leading-7 font-medium lg:w-1/2">
            We're a passionate team of developers and dedicated to reducing food waste and making
            cooking more accessible for everyone. Our mission is to help you discover amazing
            recipes using ingredients you already have at home.
          </p>
        </div>

        <div className="px-7 py-9 pb-20 lg:px-24">
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D2FAE5]">
                <i className="fa-solid fa-bullseye text-light-green text-3xl"></i>
              </div>
              <p className="text-md my-2 font-semibold">Our Mission</p>
              <p className="text-custom-gray text-xs">
                To eliminate food waste by helping people discover delicious recipes using
                ingredients they already own.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D2FAE5]">
                <i className="fa-solid fa-heart text-light-green text-3xl"></i>
              </div>
              <p className="text-md my-2 font-semibold">Our Vision</p>
              <p className="text-custom-gray text-xs">
                A world where cooking is accessible, sustainable, and enjoyable for everyone,
                regardless of skill level.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D2FAE5]">
                <i className="fa-solid fa-bullseye text-light-green text-3xl"></i>
              </div>
              <p className="text-md my-2 font-semibold">Our Values</p>
              <p className="text-custom-gray text-xs">
                Innovation, sustainability, user-centricity, and making cooking an enjoyable
                experience for all.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-20 pb-20 lg:w-[85%]">
            <h2 className="mb-7 text-center text-lg font-bold md:text-2xl">About Ingredify</h2>
            <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-16">
              <div className="mb-7 flex w-full flex-col justify-center md:mb-0 md:w-2/5">
                <h3 className="mb-3 text-lg font-semibold">What We Do</h3>
                <p className="text-custom-gray mb-5 text-sm">
                  RecipeFinder is an innovative web application that transforms the way people
                  approach cooking. Simply enter the ingredients you have in your kitchen, and our
                  intelligent search algorithm will suggest delicious recipes you can make right
                  away.
                </p>
                <p className="text-custom-gray mb-5 text-sm">
                  Our platform features thousands of carefully curated recipes, from quick weeknight
                  dinners to elaborate weekend projects. Each recipe includes detailed instructions,
                  cooking times, difficulty levels, and beautiful photography to guide you through
                  the cooking process.
                </p>
                <div className="text-custom-gray text-sm">
                  <ul className="ml-5 list-disc">
                    <li>Smart ingredient-based recipe search</li>
                    <li>Personalized recipe recommendations </li>
                    <li>Save and organize your favorite recipes</li>
                    <li> Mobile-friendly responsive design</li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <img
                  src="img/about-image.jpg"
                  alt="recipe image"
                  className="w-full rounded-xl shadow-xl md:w-xs"
                />
                <div className="bg-light-green absolute -right-4 -bottom-5 w-fit rounded-lg px-4 py-3 text-white shadow-lg md:-right-8">
                  <p className="text-xl font-bold">999+</p>
                  <p className="text-xs">Recipe Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-7 flex flex-col items-center">
            <i className="fa-solid fa-users text-light-green text-3xl"></i>
            <h2 className="my-3 text-center text-2xl font-bold">Meet Our Team</h2>
            <p className="text-custom-gray w-full text-center text-sm md:w-1/2">
              We're a diverse group of passionate individuals who came together with a shared
              vision: making cooking more accessible and reducing food waste through technology.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {teamMembers.slice(0, 2).map((member, index) => (
                    <TeamCard key={index} {...member} />
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {teamMembers.slice(2, 5).map((member, index) => (
                    <TeamCard key={index + 2} {...member} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <BackgroundImgFood /> */}
        <div className="bottom-section bg-light-green text-custom-gray relative flex flex-col items-center gap-2 px-7 py-18">
          <p className="text-custom-black text-2xl font-bold">Ready to Start Cooking?</p>
          <p className="mb-2 text-center text-sm font-medium">
            Join hundreds of home cooks who have discovered new recipes and reduced food waste with
            Ingredify.
          </p>
          <Link
            to="/home"
            className="text-light-green rounded-md bg-white px-4 py-3 text-sm font-semibold shadow transition hover:bg-white/75"
          >
            Start Finding Recipes
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default aboutPage;
