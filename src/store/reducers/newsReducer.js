import {
  GET_NEWS_REQUEST,
  GET_NEWS_FAILURE,
  GET_NEWS_SUCCESS
} from '../actions';

const initialState = {
  newsData: {},
  isFetching: false,
  error: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_NEWS_REQUEST:
      return { ...state, isFetching: true };
    case GET_NEWS_FAILURE:
      return { ...state, isFetching: false, error: action.err };
    case GET_NEWS_SUCCESS:
      return { error: null, isFetching: false, newsData: action.newsData };
    default:
      return state;
  }
};

export default newsReducer;
