import { GET_USER } from "../../constants/types";

const { profile } = require("../../data/profile.json");

export const getUser = () => (dispatch) => {
  dispatch({ type: GET_USER, payload: profile });
};
