import Card from './card_content';
import { useState, useEffect } from 'react';
import Buttons from './button_category';

export default function LastedContent() {
  const [data, setData] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('vacio');

  useEffect(() => {
    fetch('http://localhost:3001/narrativas/contents/')
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData.contents);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/narrativas/categories')
      .then((res) => res.json())
      .then((responseData) => {
        setCategories(responseData.category);
        console.log(categories);
      });
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  // Filtra los contenidos en función de la categoría seleccionada
  const filteredContents = selectedCategoryId
    ? data.filter((data) => data.category === selectedCategoryId)
    : data;

  if (!data) return <div>No hay datos para mostrar</div>;
  let length: number = categories.length;

  return (
    <div className="text-2xl font-black text-white antialiased">
      <div
        className={`mb-6 mt-1 grid grid-cols-${length} place-items-center text-center`}
      >
        {categories.map((category, index) => (
          <Buttons
            key={category._id}
            title={category.title}
            onClick={() => handleCategoryClick(category._id)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-3">
        {filteredContents.map((item) => (
          <Card
            key={item._id} // Utiliza un campo único como clave, como _id
            imageUrl={item.imagen}
            title={item.title}
            description={item.description}
            buttonUrl={item.title} // Asegúrate de que tengas este campo en tu objeto
          />
        ))}
      </div>
    </div>
  );
}
