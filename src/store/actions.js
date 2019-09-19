import { signUp } from '../services/api/index';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const loginUser = (loginData) => dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });
  console.log(loginData);
  signUp(loginData).then(res => {
    if (res.data.status === 'ok') {
      dispatch({ type: USER_LOGIN_SUCCESS, id: res.data.data.id });
    } else if (res.data.status === 'err') {
      console.log('User Login Failed:', res.data.message);
      dispatch({ type: USER_LOGIN_FAILURE, err: res.data.message });
    }
  })
  .catch (err => {
    dispatch({ type: USER_LOGIN_FAILURE, err });
  })
};

// export const RESET_STORE_IF_NOT_LOGGED_IN = 'RESET_STORE_IF_NOT_LOGGED_IN';

// export const tryResetStore = () => dispatch => dispatch({ type: RESET_STORE_IF_NOT_LOGGED_IN });







export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
