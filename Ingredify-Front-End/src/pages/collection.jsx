import FoodCard from '../components/FoodCard';
import FoodCard2 from '../components/FoodCard2';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CollectionPage = () => {
  return (
    <section className="relative overflow-visible">
      <Navbar />
      <div className="mt-7 px-7 py-9 lg:px-24">
        <h1 className="font-montez text-light-green mb-4 text-4xl font-medium">My Collection</h1>
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CollectionPage;
