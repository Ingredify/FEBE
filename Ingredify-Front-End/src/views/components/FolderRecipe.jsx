import { useState } from 'react';
import { Link } from 'react-router-dom';

const FolderRecipe = ({ collection, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(collection.name);
  const [description, setDescription] = useState(collection.description);

  const handleTrashClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(collection.id);
  };

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    onEdit(collection.id, name, description, () => setIsEditing(false));
  };

  return (
    <>
      <Link
        to={`/collections/${collection.id}`}
        className="collection-shadow hover:outline-light-green z-10 flex cursor-pointer items-center rounded-lg bg-white px-4 py-3 hover:outline-2"
      >
        <div className="flex items-center justify-center rounded-full bg-red-600 p-2 text-white">
          <svg
            className="size-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.7}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
        <div className="ml-3.5 flex w-full items-center justify-between">
          <div>
            <p className="text-sm font-semibold hover:underline">{collection.name}</p>
            <p className="text-xs">{collection.description || 'No description'}</p>
            <p className="text-xs text-gray-500">{collection.recipeCount} recipes</p>
          </div>
          <div className="flex gap-2">
            <button onClick={handleEditClick} className="hover:text-blue-500">
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button onClick={handleTrashClick} className="hover:text-red-600">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </Link>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6">
            <h2 className="mb-3 text-lg font-semibold">Edit Collection</h2>
            <form onSubmit={handleSubmitEdit} className="flex flex-col gap-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Collection Name"
                className="rounded border px-3 py-2"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="rounded border px-3 py-2"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="text-sm text-gray-500"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-light-green rounded px-4 py-2 text-white">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FolderRecipe;
