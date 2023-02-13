import { ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS, ALL_PRODUCT_FAIL, CLEAR_ERRORS } from "../constance/productConstance";

const products = []

export const productReducer = (state = { products }, { type, payload }) => {

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