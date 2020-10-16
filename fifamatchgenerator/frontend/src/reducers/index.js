import { combineReducers } from 'redux';
import results from './results';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    results,
    errors,
    messages,
    auth
});