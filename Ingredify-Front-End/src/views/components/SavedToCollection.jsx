import FolderRecipe from './FolderRecipe';

const SavedToCollection = ({ handleSave, onClose }) => {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      <button
        className="absolute top-2 right-3 text-lg text-gray-400 hover:text-black"
        onClick={onClose}
      >
        ×
      </button>

      <h2 className="mb-4 text-center text-lg font-semibold">Save to Collection</h2>

      <select className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm">
        <option value="">Select a folder</option>
        <option value="fav">Favorites</option>
        <option value="dinner">Dinner Ideas</option>
        <option value="healthy">Healthy Meals</option>
      </select>

      <button
        onClick={handleSave}
        className="w-full rounded-md bg-green-500 px-2 py-1 text-sm text-white hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};

export default SavedToCollection;
