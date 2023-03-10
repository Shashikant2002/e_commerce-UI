import { ADD_TO_CART } from "../constance/cartConstance";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const itemIsExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (itemIsExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) => {
            return i.product === itemIsExist.product ? item : i;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
