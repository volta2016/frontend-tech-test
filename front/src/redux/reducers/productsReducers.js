import { actionTypes } from "../contants/actionTypes";

const initialState = [];

const handleCart = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case actionTypes.ADD_PRODUCTS:
      // check if products exist
      const exist = state.find((pro) => pro._id === product._id);

      if (exist) {
        return state.map((pro) =>
          pro._id === product._id ? { ...pro, count: pro.count + 1 } : pro
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            count: 1,
          },
        ];
      }
      // eslint-disable-next-line no-unreachable
      break;
    case actionTypes.REMOVE_PRODUCTS:
      const existOne = state.find((pro) => pro._id === product._id);
      if (existOne.count === 1) {
        return state.filter((pro) => pro._id !== existOne._id);
      } else {
        return state.map((pro) =>
          pro._id === product._id ? { ...pro, count: pro.count - 1 } : pro
        );
      }
      // eslint-disable-next-line no-unreachable
      break;

    default:
      return state;
      // eslint-disable-next-line no-unreachable
      break;
  }
};

export default handleCart;
