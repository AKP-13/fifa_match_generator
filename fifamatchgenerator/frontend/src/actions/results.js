import axios from 'axios';

import { GET_RESULTS } from './types';

// GET RESULTS
export const getResults = () => dispatch => {
    axios.get('/api/results/')
    .then(res => {
        dispatch({
            type: GET_RESULTS,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}