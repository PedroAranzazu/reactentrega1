import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt="item.titulo" />
        <div>
          <h3 className="titulo">{item.modelo}</h3>
          <p className="descripcion">{item.color}</p>
          <p className="categoria">Categoria:{item.marca}</p>
          <p className="precio">${item.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
