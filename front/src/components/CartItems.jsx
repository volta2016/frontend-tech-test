import React from "react";
import { useDispatch } from "react-redux";
import { addCart, deleteProduct } from "../redux/actions";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDelete = (item) => {
    dispatch(deleteProduct(item));
  };

  return (
    <>
      <div className="cart-item">
        <div className="cart-item__box">
          <img src={`http://localhost:5000${props.image}`} alt={props.title} />
        </div>
        <div className="cart-item__box">
          <h3>{props.name}</h3>
          <p>
            {props.count} X ${props.price} = ${props.count * props.price}
          </p>
          <button className="adddelete" onClick={() => handleDelete(props)}>
            -
          </button>
          <button className="adddelete" onClick={() => handleAdd(props)}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
