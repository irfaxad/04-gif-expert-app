import { useState } from "react";
import { AddCategory, GifGrid, ButtonReset } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

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

  const onDeleteCategory = (categoryToDelete) => {
    setCategories(
      categories.filter((category) => category !== categoryToDelete)
    );
  };

  const onResetCategories = () => {
    setCategories([""]);
  };

  return (
    <>
      <div className="title">
        <h1>GifExpertApp</h1>
        <hr />
      </div>
      <div className="search">
        <AddCategory onAddCategory={onAddCategory} />
        <ButtonReset onReset={onResetCategories} label="Restablecer" />
      </div>

      <div className="list">
        {categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
            onDelete={onDeleteCategory}
          />
        ))}
      </div>
    </>
  );
};
