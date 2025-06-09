import FolderRecipe from '../components/FolderRecipe';
import FoodCard from '../components/FoodCard';
import FoodCard2 from '../components/FoodCard2';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CollectionsPage = () => {
  return (
    <section className="font-montserrat flex min-h-screen flex-col bg-[#F7F9FA]">
      <Navbar />
      <div className="mt-7 flex-grow px-7 py-9 lg:px-24">
        <h1 className="font-montez text-light-green mb-4 text-4xl font-medium">My Collection</h1>
        <div className="flex">
          <div className="form-collections sticky top-20 mr-5 h-fit w-1/3 rounded-2xl bg-white px-6 py-4">
            <form>
              <h2 class="text-custom-black mb-4 text-lg font-semibold">Add new collection</h2>
              <div class="mb-5">
                <label for="text" class="text-custom-black mb-2 block text-sm font-medium">
                  Folder Name
                </label>
                <input
                  type="text"
                  id="text"
                  class="text-custom-black block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="e.g My Favorite 1"
                  required
                />
              </div>
              <div class="mb-5">
                <label for="text2" class="text-custom-black mb-2 block text-sm font-medium">
                  Folder Description
                </label>
                <input
                  type="text"
                  id="text2"
                  class="text-custom-black block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  placeholder="Brief Description"
                />
              </div>

              <button
                type="submit"
                className="bg-light-green hover:bg-dark-green w-full cursor-pointer rounded-lg px-5 py-2 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none"
              >
                Create
              </button>
            </form>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
            <FolderRecipe />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CollectionsPage;
