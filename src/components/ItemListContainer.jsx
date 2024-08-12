import { useState, useEffect } from "react";
import { pedirDatos } from "../Helpers/pedirDatos";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;
  console.log(categoria);

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
      } else {
        setProductos(res);
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos}></ItemList>
    </div>
  );
};

export default ItemListContainer;
