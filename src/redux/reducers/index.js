import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ProductReducer from "./productReducer";

export default combineReducers({
  userReducer: UserReducer,
  productReducer: ProductReducer,
});
