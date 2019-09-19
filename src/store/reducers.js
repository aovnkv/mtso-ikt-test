import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import newsReducer from './reducers/newsReducer';
import userProfileReducer from './reducers/userProfileReducer';

const rootReducer = combineReducers({ loginReducer, newsReducer, userProfileReducer });

export default rootReducer;
