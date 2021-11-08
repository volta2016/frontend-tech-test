import axios from "axios";

const baseUrl_productos = process.env.REACT_APP_API_BASE;
const baseUrl_productosid = process.env.REACT_APP_API_DETAILS;

export const getProductsList = () =>
  axios.get(`${baseUrl_productos}`).then((res) => res);

export const getProductsId = (id) =>
  axios.get(`${baseUrl_productosid}${id}`).then((res) => res);
