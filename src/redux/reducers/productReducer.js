import {
  GET_PRODUCTS,
  ORDER_BY_HIGHER,
  ORDER_BY_LOWER,
} from "../../constants/types";

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
    case ORDER_BY_LOWER:
      return {
        ...state,
        carro: action.payload,
      };
    case ORDER_BY_HIGHER:
      return {
        ...state,
        carro: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
