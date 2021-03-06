import { GET_USER, UPDATE_USER } from "../../constants/types";

const INITIAL_STATE = {
  user: {},
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
