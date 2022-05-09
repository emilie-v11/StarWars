import { combineReducers } from 'redux';
import people from './peopleReducer';

/**
 * Combine Reducer for Redux - Present day juste one reducer for people URL attributes
 */

const rootReducer = combineReducers({
    people,
});

export default rootReducer;
