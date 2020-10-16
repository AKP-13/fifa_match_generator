import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_RESULTS, DELETE_RESULT, ADD_RESULT } from './types';

// GET RESULTS
export const getResults = () => dispatch => {
    axios.get('/api/results/')
    .then(res => {
        dispatch({
            type: GET_RESULTS,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE RESULT
export const deleteResult = (id) => dispatch => {
    axios.delete(`/api/results/${id}/`)
    .then(res => {
        dispatch(createMessage({
            deleteResult: "Result deleted."
        }))
        dispatch({
            type: DELETE_RESULT,
            payload: id
        });
    })
    .catch(err => console.log(err));
}

// ADD RESULT
export const addResult = (result) => dispatch => {
    axios.post('/api/results/', result)
    .then(res => {
        dispatch(createMessage({
            addResult: "Result added."
        }))
        dispatch({
            type: ADD_RESULT,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}