import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SvgCart from "../../assets/logo-shopping-cart-mobile.svg";
import Profile from "../../assets/profile.svg";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="checkout">
      <NavLink to="/checkout" className="anchor-cart">
        <img className="icon-check" src={SvgCart} alt="cart" />({state.length})
      </NavLink>
      <NavLink to="/register" className="anchor-cart">
        <img className="icon-check" src={Profile} alt="profile" />
      </NavLink>
    </div>
  );
};

export default Checkout;
