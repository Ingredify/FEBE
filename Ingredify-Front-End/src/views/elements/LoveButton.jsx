import { useState } from 'react';
import FolderRecipe from '../components/FolderRecipe';
import SavedToCollection from '../components/SavedToCollection';

const LoveButton = ({ liked, onToggle, recipeId }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('');

  const handleClick = () => {
    if (!liked) {
      setShowSelect(true);
    } else {
      onToggle();
    }
  };

  // const handleSave = () => {
  //   if (selectedFolder) {
  //     setShowSelect(false);
  //   }
  // };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={`cursor-pointer rounded-full bg-white/65 p-1.5 transition hover:bg-white/80 hover:text-red-400 ${
          liked ? 'text-red-500' : 'text-gray-100'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="red"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>

      {showSelect && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <SavedToCollection
            recipeId={recipeId}
            handleSave={() => {
              // handleSave();
              onToggle();
            }}
            onClose={() => setShowSelect(false)}
          />
        </div>
      )}
    </div>
  );
};

export default LoveButton;
