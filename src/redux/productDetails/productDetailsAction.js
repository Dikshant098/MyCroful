import axios from 'axios'
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_RESET } from './productDetailsConstants'

export const getProductDetails = (params) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.get("http://localhost:2023/api/product/getProductDetails/" + params, config);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error
        })
    }

}
