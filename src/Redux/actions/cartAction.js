import axios from "axios";
import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constance/cartConstance";

export const addItemsToCart = (id, quentity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  console.log(data);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.stock,
      quentity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  console.log(data);

  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
