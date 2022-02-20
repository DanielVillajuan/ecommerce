import {
  ADD_CARRITO,
  CLEAR_CARRITO,
  CLEAR_CARRITO_BY_ID,
} from "../../constants/types";

export const addCarrito = (product) => (dispatch) => {
  dispatch({ type: ADD_CARRITO, payload: product });
};

export const clear = () => (dispatch) => {
  dispatch({ type: CLEAR_CARRITO, payload: [] });
};

export const clearCarritoById = (id) => (dispatch) => {
  dispatch({ type: CLEAR_CARRITO_BY_ID, payload: id });
};
