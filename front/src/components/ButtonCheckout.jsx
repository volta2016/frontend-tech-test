import React from "react";
import { NavLink } from "react-router-dom";

const ButtonCheckout = () => {
  return (
    <>
      <NavLink to="/checkout" className="buttoncheck">
        Checkout payment
      </NavLink>
    </>
  );
};

export default ButtonCheckout;
