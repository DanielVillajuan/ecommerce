import { GET_PRODUCTS } from "../../constants/types";

const { productos } = require("../../data/products.json");

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS, payload: productos });
};
