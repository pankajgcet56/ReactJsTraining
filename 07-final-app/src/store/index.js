import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from '../reducers/bugsReducer';
import spinnerReducer from '../reducers/spinnerReducer';
import thunk from 'redux-thunk';

let allReducers = combineReducers({
	bugs : bugsReducer,
	spinner : spinnerReducer
});

let appStore = createStore(allReducers, applyMiddleware(thunk));

export default appStore;