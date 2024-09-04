import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;
  console.log(categoria);

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos}></ItemList>
    </div>
  );
};

export default ItemListContainer;
