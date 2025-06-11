import AddNewCollection from '../components/AddNewCollection';
import FolderRecipe from '../components/FolderRecipe';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BackgroundImgFood from '../elements/BackgroundImgFood';
import {
  fetchUserCollections,
  handleDeleteCollection,
  handleEditCollection,
} from '../../presenter/CollectionPresenter';

const CollectionsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserCollections(setCollections, setError);
  }, []);

  const handleCollectionCreated = () => {
    fetchUserCollections(setCollections, setError);
    setShowModal(false);
  };

  const handleDelete = (collectionId) => {
    const confirmed = window.confirm('Are you sure you want to delete this collection?');
    if (!confirmed) return;

    handleDeleteCollection(
      collectionId,
      () => fetchUserCollections(setCollections, setError), // refresh list
      (err) => {
        console.error('Failed to delete:', err);
        alert('Delete failed');
      },
    );
  };

  const handleEdit = (collectionId, newName, newDescription, onCloseModal) => {
    handleEditCollection(
      collectionId,
      newName,
      newDescription,
      () => {
        fetchUserCollections(setCollections, setError);
        onCloseModal?.();
      },
      (err) => {
        console.error('Failed to edit:', err);
        alert('Edit failed');
      },
    );
  };

  return (
    <section className="font-montserrat relative flex min-h-screen flex-col bg-[#F7F9FA]">
      <Navbar />
      <div className="mt-7 flex-grow px-7 py-9 lg:px-24">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="font-montez text-light-green text-4xl font-medium">My Collection</h1>
          <button
            onClick={() => setShowModal(true)}
            className="btn-add-collection bg-light-green hover:bg-dark-green block cursor-pointer rounded-xl px-4 py-2.5 text-xs font-medium text-white md:text-sm lg:hidden"
          >
            + Add Collection
          </button>
        </div>
        <div className="relative flex">
          <div className="form-collections top-96 z-10 mr-5 hidden w-1/3 rounded-2xl bg-white px-6 py-4 lg:sticky lg:block">
            <AddNewCollection onSuccess={handleCollectionCreated} />
          </div>
          <div className="grid h-21 w-full grid-cols-1 gap-5 md:grid-cols-3">
            {collections.length === 0 ? (
              <p className="text-sm text-gray-400">No collections yet.</p>
            ) : (
              collections.map((col) => (
                <FolderRecipe
                  key={col.id}
                  collection={col}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <BackgroundImgFood />
      {showModal && (
        <div className="bg-opacity-40 fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 lg:hidden">
          <div className="relative w-full max-w-md rounded-xl bg-white p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <AddNewCollection onSuccess={handleCollectionCreated} />
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default CollectionsPage;
