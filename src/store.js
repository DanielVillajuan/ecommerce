import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./redux/reducers";

const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

export default store;
