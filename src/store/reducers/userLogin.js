import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS
} from '../actions';

const initialState = {
  loggedUserID: null,
  isFetching: false,
  error: null
};

const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case USER_LOGIN_FAILURE:
      return { ...state, isFetching: false, error: action.err };
    case USER_LOGIN_SUCCESS:
      return { ...state, isFetching: false, loggedUserID: action.id };
    default:
      return state;
  }
};

export default userLogin;
