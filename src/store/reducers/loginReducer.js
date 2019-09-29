import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from '../actions';

const initialState = {
  userID: undefined,
  isSubmitting: false,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isSubmitting: true };
    case USER_LOGIN_FAILURE:
      return { ...state, isSubmitting: false, error: action.err };
    case USER_LOGIN_SUCCESS:
      return { error: null, isSubmitting: false, userID: action.id };
    case USER_LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};

export default loginReducer;
