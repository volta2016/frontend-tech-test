import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "../components/EmptyCart";
import CartItems from "../components/CartItems";
import ButtonCheckout from "../components/ButtonCheckout";

const CheckoutCart = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div className="container vh">
      <h2>Checkout Products</h2>
      {state.length === 0 && <EmptyCart />}
      {state.length !== 0 &&
        state.map(({ ...otherProps }) => {
          const generateId = () => Math.floor(Math.random() * 999999999 + 1);

          return <CartItems key={generateId()} {...otherProps} />;
        })}
      {state.length !== 0 && <ButtonCheckout />}
    </div>
  );
};

export default CheckoutCart;
