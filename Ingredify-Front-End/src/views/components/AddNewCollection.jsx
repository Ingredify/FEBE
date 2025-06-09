const AddNewCollection = () => {
  return (
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
  );
};

export default AddNewCollection;
