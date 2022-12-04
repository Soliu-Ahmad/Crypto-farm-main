import { ActionTypes } from "../constants/actionType";


export const setCarts = (cart = []) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: ActionTypes?.SET_CART_LISTS,
        payload: cart ?? [],
      });
    } catch (error) {
      console.log(error);
    }
  };
};


