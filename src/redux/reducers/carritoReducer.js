import {
  ADD_CARRITO,
  CLEAR_CARRITO,
  CLEAR_CARRITO_BY_ID,
} from "../../constants/types";

const INITIAL_STATE = {
  carro: [],
};

const CarritoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CARRITO:
      return {
        ...state,
        carro: state.carro.concat(action.payload),
      };
    case CLEAR_CARRITO:
      return {
        ...state,
        carro: action.payload,
      };
    case CLEAR_CARRITO_BY_ID:
      return {
        ...state,
        carro: state.carro.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default CarritoReducer;
