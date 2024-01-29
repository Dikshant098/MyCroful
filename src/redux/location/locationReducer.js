import { SET_LOCATION_REQUEST, SET_LOCATION_SUCCESS, SET_LOCATION_FAIL, SET_LOCATION_RESET } from './locationConstants'
import { GET_LOCATION_REQUEST, GET_LOCATION_SUCCESS, GET_LOCATION_FAIL, GET_LOCATION_RESET } from './locationConstants'

export const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LOCATION_REQUEST:
            return {
                loading: true
            }

        case SET_LOCATION_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: action.payload,
            }

        case GET_LOCATION_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: state,
            }

        case SET_LOCATION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_LOCATION_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case SET_LOCATION_RESET:
            return {}
        default:
            return state;
    }
}


