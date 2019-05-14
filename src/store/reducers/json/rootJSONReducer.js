import { combineReducers } from 'redux';

import pagesReducer from './pages';

export const rootReducer = combineReducers({
	pages: pagesReducer
});