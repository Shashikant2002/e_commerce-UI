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
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "../constance/userConstance";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      header: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_REQUEST,
      loading: true,
    });

    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: LOAD_SUCCESS,
      payload: data,
      loading: false,
    });
  } catch (err) {
    dispatch({
      type: LOAD_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get("/api/v1/logout");

    dispatch({
      type: LOGOUT_SUCCESS,
      loading: false,
    });
  } catch (err) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = {
      header: { "Content-Type": "multipart/data" },
    };
    const { data } = await axios.post(`/api/v1/register`, userData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message,
    });
  }
};
// update profile
export const updateProfileDetail = ({name, email, avtar}) => async (dispatch) => {
  try {
    console.log(name, email, avtar);
    dispatch({ type: UPDATE_REQUEST });
    const config = {
      header: { "Content-Type": "multipart/data" },
    };
    const { data } = await axios.put(`/api/v1/me/update`, {name, email, avtar }, config);

    dispatch({
      type: UPDATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_SUCCESS,
      payload: err.response.data.message,
    });
  }
};
