import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ProductReducer from "./productReducer";
import CarritoReducer from "./carritoReducer";

export default combineReducers({
  userReducer: UserReducer,
  productReducer: ProductReducer,
  carritoReducer: CarritoReducer,
});
