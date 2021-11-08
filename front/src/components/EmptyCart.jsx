import React from "react";
import EmptyShop from "../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <div>
      <h3 className="cart-empty">Cart Empty add to list 🙁</h3>
      <img className="emptyShop" src={EmptyShop} alt="EmptyCart" />
    </div>
  );
};

export default EmptyCart;
