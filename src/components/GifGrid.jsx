import { GifItem, ButtonReset } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDelete }) => {
  const { images, isLoading } = useFetchGifs(category);

  const handleDelete = () => {
    onDelete(category);
  };

  return (
    <div id={category}>
      {category && (
        <div className="card-header">
          <h3>
            Resultados para <em>{category}</em>
          </h3>
          <ButtonReset onReset={handleDelete} label="Eliminar" />
        </div>
      )}
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
