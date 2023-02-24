import {
  CLEAR_ERRORS,
  LOAD_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  UPDATE_FAIL,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_RESET,
} from "../constance/userConstance";

export const userReducer = (state = { user: {} }, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOAD_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };

    case LOAD_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const profileReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: payload,
      };

    case UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
