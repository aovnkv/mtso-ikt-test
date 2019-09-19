import { signUp } from '../services/api/index';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

export const loginUser = async ( loginData) => dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
  const response = await signUp(loginData);
    if (response.status === 'ok') {
      dispatch((id = response.data.id) => ({ type: USER_LOGIN_SUCCESS, id }));
    } else if (response.status === 'err') {
      console.log('User Login Failed:', json.message);
      dispatch(err => ({ type: USER_LOGIN_FAILURE, err }));
    }
  }
  catch (err) {
    console.log('User Login Failed:', err);
    dispatch(err => ({ type: USER_LOGIN_FAILURE, err }));
  }

};

export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
