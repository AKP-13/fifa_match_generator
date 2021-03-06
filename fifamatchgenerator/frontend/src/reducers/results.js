import { GET_RESULTS, DELETE_RESULT, ADD_RESULT, CLEAR_RESULTS } from '../actions/types.js';

const initialState = {
    results: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_RESULTS:
            return {
                ...state,
                results: action.payload
            };
        case DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.payload)
            };
        case ADD_RESULT:
            return {
                ...state,
                results: [...state.results, action.payload]
            }
        case CLEAR_RESULTS:
            return {
                ...state,
                results: []
            }
        default:
            return state;
    }
}