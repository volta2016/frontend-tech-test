import React from "react";
import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";

const Product = ({ _id, name, image, price }) => {
  // const products = useSelector((state) => state.allProducts.products);
  // console.log(_id);
  return (
    <>
      <div className="card">
        <div className="card__content" key={_id}>
          <img
            src={`http://localhost:5000${image}`}
            className="card-img-top"
            alt={name}
            height="250px"
          />
          <div className="card-body">
            <h3 className="card-title mb-0">{name}</h3>
            <p className="m-y">${price}</p>
            <NavLink to={`/products/${_id}`} className="buy center">
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
