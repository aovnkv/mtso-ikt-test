import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from '../actions';

const initialState = {
  userID: undefined,
  isFetching: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case USER_LOGIN_FAILURE:
      return { ...state, isFetching: false, error: action.err };
    case USER_LOGIN_SUCCESS:
      return { error: null, isFetching: false, userID: action.id };
    case USER_LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default loginReducer;