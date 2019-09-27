import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
} from '../actions';

const initialState = {
  userData: {},
  isFetching: false,
  error: null
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return { ...state, isFetching: true };
    case GET_USER_PROFILE_FAILURE:
      return { ...state, isFetching: false, error: action.err };
    case GET_USER_PROFILE_SUCCESS:
      return { error: null, isFetching: false, userData: action.userData };
    default:
      return state;
  }
};

export default userProfileReducer;
