import axios from 'axios'
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_RESET } from './searchContants'
import { SEARCH_PRODUCT_SHOP_DETAILS_REQUEST, SEARCH_PRODUCT_SHOP_DETAILS_SUCCESS, SEARCH_PRODUCT_SHOP_DETAILS_FAIL, SEARCH_PRODUCT_SHOP_DETAILS_RESET } from './searchContants'

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
export const searchShopDetails = (params) => async (dispatch) => {
    console.log(params);
    try {
        dispatch({
            type: SEARCH_PRODUCT_SHOP_DETAILS_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("http://localhost:2023/api/search/getProductDetailsById/" + params, config);

        dispatch({
            type: SEARCH_PRODUCT_SHOP_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: SEARCH_PRODUCT_SHOP_DETAILS_FAIL,
            payload: error
        })
    }

}



