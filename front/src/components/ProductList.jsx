import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import Product from "./Product";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";

import useGetProducts from "../Hooks/useGetProducts";

const ProductList = () => {
  const { products, loading, error, getProducts } = useGetProducts();

  useEffect(() => {
    getProducts();
    // console.log("ok mount");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container flex-wrap">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        products.map((product) => <Product key={product._id} {...product} />)
      )}
    </div>
  );
};

export default ProductList;
