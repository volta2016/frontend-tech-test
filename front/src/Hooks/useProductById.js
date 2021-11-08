import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getProductsId } from "../API";

const useProductById = (id) => {
  const [products, setProducts] = useLocalStorage("products", ""); //key value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getProductsById() {
    try {
      const { data } = await getProductsId(id);

      setProducts(data); //update products
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    getProductsById();
    // console.log("ok mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { products, loading, error, getProductsById }; //props available
};

export default useProductById;
