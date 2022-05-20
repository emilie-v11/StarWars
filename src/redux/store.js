import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

/**
 * A breadcrumb trail Component - Nav in Header
 * @property {string} personName - Name of the current person in details page
 * @property {object} currentPerson - All Data object of the current person in details page
 */

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
