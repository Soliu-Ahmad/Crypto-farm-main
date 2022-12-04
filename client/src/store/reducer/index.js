import { combineReducers } from "redux";
import {
  cartsReducer,
} from "./cartReducer";

import { ActionTypes } from "../constants/actionType";

const appReducer = combineReducers({
  carts: cartsReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

// const reducers = reducersNormal;

export default rootReducer;
