import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(inputValue);
    setinputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
