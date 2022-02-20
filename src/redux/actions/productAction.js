import {
  GET_PRODUCTS,
  ORDER_BY_HIGHER,
  ORDER_BY_LOWER,
} from "../../constants/types";

const { productos } = require("../../data/products.json");

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS, payload: productos });
};

export const orderByLower = () => (dispatch) => {
  productos.sort((a, b) => {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
  });
  dispatch({ type: ORDER_BY_LOWER, payload: productos });
};

export const orderByHigher = () => (dispatch) => {
  productos.sort((a, b) => {
    if (b.price > a.price) return 1;
    if (b.price < a.price) return -1;
    return 0;
  });
  dispatch({ type: ORDER_BY_HIGHER, payload: productos });
};
