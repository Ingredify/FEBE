import { useEffect, useState } from 'react';
import {
  fetchUserCollections,
  handleAddRecipeToCollection,
} from '../../presenter/CollectionPresenter';

const SavedToCollection = ({ recipeId, handleSave, onClose }) => {
  const [collections, setCollections] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserCollections(setCollections, setError);
  }, []);

  const onSave = () => {
    if (!selectedFolder) return;

    handleAddRecipeToCollection(
      selectedFolder,
      recipeId,
      () => {
        handleSave();
        alert('Saved successfully');
        onClose();
      },
      (err) => {
        alert('Failed to save: ' + (err.message || 'Unknown error'));
      },
    );
  };

  return (
    <div className="relative mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      <button
        className="absolute top-2 right-3 cursor-pointer text-3xl text-gray-400 hover:text-black"
        onClick={onClose}
      >
        ×
      </button>

      <h2 className="mb-4 text-center text-lg font-semibold">Save to Collection</h2>

      <select
        className="mb-4 w-full rounded-md border border-gray-300 p-2 text-sm"
        value={selectedFolder}
        onChange={(e) => {
          const selected = e.target.value;
          console.log('Selected Collection ID:', selected);
          setSelectedFolder(selected);
        }}
      >
        <option value="">Select a folder</option>
        {collections.map((col) => (
          <option key={col.id} value={col.id}>
            {col.name}
          </option>
        ))}
      </select>

      <button
        onClick={onSave}
        className="bg-light-green hover:bg-dark-green w-full cursor-pointer rounded-md px-2 py-1 text-sm text-white"
      >
        Save
      </button>
    </div>
  );
};

export default SavedToCollection;
