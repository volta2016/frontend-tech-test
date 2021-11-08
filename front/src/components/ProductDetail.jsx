import React from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { NavLink } from "react-router-dom";

import useProductById from "../Hooks/useProductById";
import LoadingDetails from "./common/LoadingDetails";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading } = useProductById(id);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="detail-6 mt">
          <img
            src={`http://localhost:5000${products.image}`}
            alt={products.name}
          />
        </div>
        <div className="detail-6 mt">
          <h4 className="text-black">{products.category}</h4>
          <h1 className="m-y">{products.name}</h1>
          <p className="rating">
            <b>Rating</b> {products.rating}
          </p>
          <h3 className="display-6 fw-bold my-4">$ {products.price}</h3>
          <p className="descritption m-y">{products.description}</p>
          <div className="flex">
            <button className="buy-detail" onClick={() => addProduct(products)}>
              Add to Cart
            </button>
            <NavLink to="/checkout" className="buy-detail">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container flex-wrap">
        {loading ? <LoadingDetails /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default ProductDetail;
