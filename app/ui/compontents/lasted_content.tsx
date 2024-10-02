import Card from './card_content';
import { useState, useEffect } from 'react';
import Buttons from './button_category';

export default function LastedContent() {
  const [data, setData] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    '66020557b6b0cba9fbb16bfb',
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://backend-narrativas.onrender.com/narrativas/contents/')
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.contents);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://backend-narrativas.onrender.com/narrativas/categories')
      .then((res) => res.json())
      .then((responseData) => {
        setCategories(responseData.category);
        console.log(categories);
      });
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1); // Reset page to 1 when category changes
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Filtra los contenidos en función de la categoría seleccionada
  const filteredContents = selectedCategoryId
    ? data.filter((data) => data.category === selectedCategoryId)
    : data;

  // Calcula los contenidos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContents = filteredContents.slice(startIndex, endIndex);

  if (!data) return <div>No hay datos para mostrar</div>;

  return (
    <div className="bg text-2xl font-black text-stone-700 antialiased">
      <div className="mb-2 mt-1 flex flex-wrap justify-center gap-1 px-4">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category._id)}
            className={`flex-grow rounded-lg px-6 py-2 ${
              selectedCategoryId === category._id
                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-yellow-500'
                : 'bg-gradient-to-r from-blue-300 to-blue-500 text-white hover:from-blue-400 hover:to-blue-600'
            } shadow-lg transition duration-300 ease-in-out`}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-3">
        {currentContents.map((item) => (
          <Card
            key={item._id} // Utiliza un campo único como clave, como _id
            imageUrl={item.imagen}
            title={item.title}
            buttonUrl={item.content_url} // Asegúrate de que tengas este campo en tu objeto
            className="text-blue-500 hover:underline"
          />
        ))}
      </div>
      <div className="mb-4 mt-4 flex justify-center">
        {' '}
        {/* Added mb-4 for bottom padding */}
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="mx-2 rounded bg-gradient-to-r from-purple-400 to-purple-600 px-4 py-2 text-white disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= filteredContents.length}
          className="mx-2 rounded bg-gradient-to-r from-purple-400 to-purple-600 px-4 py-2 text-white disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
