const Pagination = ({ page, setPage, totalPages }) => {
  const maxVisible = 5;

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPages, page + 2);

    if (endPage - startPage < maxVisible - 1) {
      if (startPage === 1) {
        endPage = Math.min(startPage + maxVisible - 1, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(endPage - maxVisible + 1, 1);
      }
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => setPage(1)}
          className={`w-8 border-gray-300 md:w-10 ${page === 1 ? 'bg-light-green text-white' : 'hover:bg-gray-100'}`}
        >
          1
        </button>,
      );
      if (startPage > 2) {
        pages.push(
          <span key="start-ellipsis" className="px-2">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`w-8 cursor-pointer border border-gray-300 md:w-10 ${page === i ? 'bg-light-green text-white' : 'hover:bg-gray-100'}`}
        >
          {i}
        </button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="end-ellipsis" className="px-2 align-text-bottom">
            ...
          </span>,
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => setPage(totalPages)}
          className={`cursor-pointer border border-gray-300 px-3 py-2 ${page === totalPages ? 'bg-light-green text-white' : 'hover:bg-gray-100'}`}
        >
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex flex-wrap" aria-label="Pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="w-10 cursor-pointer items-center rounded-l-md border border-gray-300 text-gray-400 ring-gray-300 ring-inset hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="w-10 cursor-pointer items-center rounded-r-md border border-gray-300 text-gray-400 ring-gray-300 ring-inset hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
