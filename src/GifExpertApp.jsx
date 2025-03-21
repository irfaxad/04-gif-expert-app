import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  // Función para agregar una categoría
  const onAddCategory = (newCategory) => {
    if (!newCategory.trim()) {
      console.log("La categoría no puede estar vacía");
      return;
    }
    if (categories.includes(newCategory)) {
      console.log("La categoría ya existe");
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div className="title">
        <h1>GifExpertApp</h1>
        <hr />
      </div>
      <div className="search">
        <AddCategory onAddCategory={onAddCategory} />
      </div>
      <div className="list">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
