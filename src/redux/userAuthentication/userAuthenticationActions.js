import axios from 'axios'
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, REGISTER_RESET } from './userAuthenticationContants'

export const register = (obj) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post("http://localhost:2023/api/user/createUser", obj, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: REGISTER_FAIL,
            payload: error
        })
    }

}



