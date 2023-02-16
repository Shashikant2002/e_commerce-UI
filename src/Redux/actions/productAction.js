import axios from "axios";
import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from "../constance/productConstance";

export const getProduct = (keyword = "", currentPage = 1, minPrice, maxPrice, category) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST,
        })

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${minPrice}&price[lte]=${maxPrice}`;
        if (category) {
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${minPrice}&price[lte]=${maxPrice}&category=${category}`;
        }
        const data = await axios.get(link);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (err) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: err.response.data.message,
        })
    }
}

export const getProductDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAIL_REQUEST,
        })

        const data = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload: data,
        })

    } catch (err) {
        dispatch({
            type: PRODUCT_DETAIL_FAIL,
            payload: err.response.data.message,
        })
    }
}

export const clearAllError = async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}