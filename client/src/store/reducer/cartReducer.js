import { ActionTypes } from "../constants/actionType";


const initialState = {
  carts: [],
};

export const cartsReducer = (
  state: any = initialState.carts,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.SET_CART_LISTS:
      return action.payload;
    default:
      return state;
  }
};