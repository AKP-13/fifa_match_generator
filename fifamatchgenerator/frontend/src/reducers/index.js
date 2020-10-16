import { combineReducers } from 'redux';
import results from './results';
import errors from './errors';

export default combineReducers({
    results,
    errors
});