import counterReducer from './counter';
import loggedReducer from './logged';
//importo los dos reducers y los combino para usar solo el rootReducer
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	counter: counterReducer,
	logged: loggedReducer,
});

export default rootReducer;
