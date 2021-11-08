import { actionTypes } from "../contants/actionTypes";

export const addCart = (products) => {
  return {
    type: actionTypes.ADD_PRODUCTS,
    payload: products,
  };
};

// For Delete Item From Cart
export const deleteProduct = (products) => {
  return {
    type: actionTypes.REMOVE_PRODUCTS,
    payload: products,
  };
};
