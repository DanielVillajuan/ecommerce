import { GET_USER, UPDATE_USER } from "../../constants/types";

const { profile } = require("../../data/profile.json");

export const getUser = () => (dispatch) => {
  dispatch({ type: GET_USER, payload: profile });
};

export const updateUser = (user) => (dispatch) => {
  dispatch({ type: UPDATE_USER, payload: user });
};
