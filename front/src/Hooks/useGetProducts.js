import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getProductsList } from "../API";

const useGetProducts = () => {
  const [products, setProducts] = useLocalStorage("products", ""); //key value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getProducts() {
    try {
      const { data } = await getProductsList();
      // console.log(data);
      setProducts(data); //update products
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }
  // console.log(products);

  return { products, loading, error, getProducts }; //props available
};

export default useGetProducts;
