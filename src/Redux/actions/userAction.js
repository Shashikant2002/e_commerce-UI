import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constance/userConstance";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: LOGIN_REQUEST
        })

        const config = {
            header: { "Content-Type": "application/json" }
        }
        const { data } = await axios.post("/api/v1/login", { email, password }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.message
        })
    }
}