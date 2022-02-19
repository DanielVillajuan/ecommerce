import { ADD_CARRITO } from "../../constants/types";

export const addCarrito = (product) => (dispatch) => {
  dispatch({ type: ADD_CARRITO, payload: product });
};
