import { ADD_CARRITO } from "../../constants/types";

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
    default:
      return state;
  }
};

export default CarritoReducer;
