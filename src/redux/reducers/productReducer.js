import { GET_PRODUCTS } from "../../constants/types";

const INITIAL_STATE = {
  products: [],
};

const ProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
