import axios from "axios";
import { ADD_TO_CART } from "../constance/cartConstance";

export const addItemsToCart = (id, quentity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image[0].url,
      stock: data.product.stock,
      quentity,
    },
  });

  localStorage.setItem("cartItems", json.stringfy(getState.cart.cartItems));
};
