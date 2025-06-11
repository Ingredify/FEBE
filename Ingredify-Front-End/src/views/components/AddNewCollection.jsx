import { useState } from 'react';
import { handleAddCollection } from '../../presenter/CollectionPresenter';

const AddNewCollection = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const dataCollection = {
      name: formData.name,
      description: formData.description,
    };

    await handleAddCollection(
      dataCollection,
      () => {
        setLoading(false);
        onSuccess?.();
      },
      (err) => {
        setLoading(false);
        setErrorMsg(err.message || 'Failed to create collection');
      },
    );
  };

  return (
    <form onSubmit={onSubmit}>
      {errorMsg && <p className="mb-3 text-sm text-red-500">{errorMsg}</p>}
      <h2 class="text-custom-black mb-4 text-lg font-semibold">Add new collection</h2>
      <div class="mb-5">
        <label for="text" class="text-custom-black mb-2 block text-sm font-medium">
          Folder Name
        </label>
        <input
          type="text"
          id="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
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
          name="description"
          value={formData.description}
          onChange={handleChange}
          class="text-custom-black block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
          required
          placeholder="Brief Description"
        />
      </div>

      <button
        type="submit"
        className="bg-light-green hover:bg-dark-green w-full cursor-pointer rounded-lg px-5 py-2 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none"
        disabled={loading}
      >
        {loading ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
};

export default AddNewCollection;
