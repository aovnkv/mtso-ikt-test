export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

const API_ENDPOINT =
  'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

export const loginUser = (email, pwd) => {
  return dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST });

    return fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: pwd })
    })
      .then(res => res.json())
      .then(json => {
        if (json.status === 'ok') {
          dispatch((id = json.data.id) => ({ type: USER_LOGIN_SUCCESS, id }));
        } else if (json.status === 'err') {
          console.log('User Login Failed:', json.message);
          dispatch(err => ({ type: USER_LOGIN_FAILURE, err }));
        }
      })
      .catch(err => {
        console.log('User Login Failed:', err);
        dispatch(err => ({ type: USER_LOGIN_FAILURE, err }));
      });
  };
};

export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
