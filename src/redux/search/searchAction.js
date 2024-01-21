import axios from 'axios'
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_RESET } from './searchContants'

export const searchProduct = (params) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("http://localhost:2023/api/search/searchByProduct/" + params, config);

        dispatch({
            type: SEARCH_SUCCESS,  
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: SEARCH_FAIL,
            payload: error
        })
    }

}
export const searchCategory = (params) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("http://localhost:2023/api/search/searchByCategory/" + params, config);

        dispatch({
            type: SEARCH_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: SEARCH_FAIL,
            payload: error
        })
    }

}



