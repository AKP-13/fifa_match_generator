import axios from 'axios';

import { GET_RESULTS, DELETE_RESULT } from './types';

// GET RESULTS
export const getResults = () => dispatch => {
    axios.get('/api/results/')
    .then(res => {
        dispatch({
            type: GET_RESULTS,
            payload: res.data
        });
    })
    .catch(err => console.log(err));
}

// DELETE RESULT
export const deleteResult = (id) => dispatch => {
    axios.delete(`/api/results/${id}/`)
    .then(res => {
        dispatch({
            type: DELETE_RESULT,
            payload: id
        });
    })
    .catch(err => console.log(err));
}