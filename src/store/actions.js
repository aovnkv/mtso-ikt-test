import { validate, getUserInfo, fetchNews } from '../services/api/index';
import history from '../history';

/* USER AUTHENTICATION */
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';

export const authenticateUser = loginData => dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST });

  validate(loginData).then(res => {
    if (res.data.status === 'ok') {
      dispatch({ type: USER_LOGIN_SUCCESS, id: res.data.data.id });
      history.push('/profile');
    } else if (res.data.status === 'err') {
      dispatch({ type: USER_LOGIN_FAILURE, err: res.data.message });
    }
  })
  .catch (err => {
    dispatch({ type: USER_LOGIN_FAILURE, err });
  })
};

export const logoutUser = () => dispatch => {
  dispatch({ type: USER_LOGOUT_SUCCESS });
  history.push('/login');
}


/* USER PROFILE DATA */
export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';

export const getUserProfile = id => dispatch => {
  dispatch({ type: GET_USER_PROFILE_REQUEST });

  getUserInfo(id).then(res => {
    if (res.data.status === 'ok') {
      dispatch({ type: GET_USER_PROFILE_SUCCESS, userData: res.data.data});
    } else if (res.data.status === 'err') {
      dispatch({ type: GET_USER_PROFILE_FAILURE, err: res.data.message });
    }
  })
  .catch (err => {
    dispatch({ type: GET_USER_PROFILE_FAILURE, err });
  })
};


/* NEWS DATA */
export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';

export const getNews = () => dispatch => {
  dispatch({ type: GET_NEWS_REQUEST });

  fetchNews().then(res => {
    if (res.data.status === 'ok') {
      dispatch({ type: GET_NEWS_SUCCESS, newsData: res.data.data});
    } else if (res.data.status === 'err') {
      dispatch({ type: GET_NEWS_FAILURE, err: res.data.message });
    }
  })
  .catch (err => {
    dispatch({ type: GET_NEWS_FAILURE, err });
  })
};