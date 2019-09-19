import { combineReducers } from 'redux';
import userLogin from './reducers/LoginFormReducer';
import news from './reducers/news';
import userInfo from './reducers/userInfo';

const rootReducer = combineReducers({ userLogin, news, userInfo });

export default rootReducer;
