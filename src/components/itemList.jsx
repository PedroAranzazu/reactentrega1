import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <h2 className="main-title">Catalogo</h2>

      <div className="productos">
        {productos.map((prod) => (
          <Item
            producto={prod}
            key={prod.id}
            marca={prod.marca}
            imagen={prod.imagen}
            precio={prod.precio}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
