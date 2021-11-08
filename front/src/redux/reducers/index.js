import { combineReducers } from "redux";
import handleCart from "./productsReducers";
const reducers = combineReducers({
  handleCart,
});
export default reducers;
