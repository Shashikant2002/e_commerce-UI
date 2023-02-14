import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAIL } from "../constance/productConstance";

export const productReducer = (state = { products: [] }, { type, payload }) => {
    switch (type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: payload.data.products,
                prodCount: payload.data.productCount
            }

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default: {
            return state;
        }
    }
}

export const productDetailReducer = (state = { product: {} }, { type, payload }) => {
    switch (type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                loading: true,
                ...state
            }

        case PRODUCT_DETAIL_SUCCESS:
            return {
                loading: false,
                product: payload.data.product,
            }

        case PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
                error: payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default: {
            return state;
        }
    }
}