import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_RESET } from './searchContants'

export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                loading: true
            }
        case SEARCH_SUCCESS:
            return {
                loading: false,
                success: true,
                payload: action.payload,
            }

        case SEARCH_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case SEARCH_RESET:
            return {}
        default:
            return state;
    }
}

