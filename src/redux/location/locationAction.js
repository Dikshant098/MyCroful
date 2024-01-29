import axios from 'axios'
import { SET_LOCATION_REQUEST, SET_LOCATION_SUCCESS, SET_LOCATION_FAIL, SET_LOCATION_RESET } from './locationConstants'
import { GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS, GET_LOCATION_FAIL, GET_LOCATION_RESET } from './locationConstants'

export const setLocationDetails = (location) => async (dispatch) => {
    console.log(location);
    try {
        dispatch({
            type: SET_LOCATION_REQUEST,
        })

        dispatch({
            type: SET_LOCATION_SUCCESS,
            payload: location
        })
        
    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: SET_LOCATION_FAIL,
            payload: error
        })
    }

}
export const getLocationDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_LOCATION_REQUEST,
        })

    } catch (error) {
        // console.log("error", error);
        dispatch({
            type: GET_LOCATION_FAIL,
            payload: error
        })
    }

}
