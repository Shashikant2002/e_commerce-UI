import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constance/userConstance";


export const userReducer = (state = { user: {} }, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: payload
            }

        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}