import {
  SITE_LIST_REQUEST,
  SITE_LIST_SUCCESS,
  SITE_LIST_FAILURE,
} from 'actions/siteList';

const initialState = {
  loading: false,
  success: false,
  failed: false,
  sites: [],
};

const siteListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SITE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        failed: false,
      };
    case SITE_LIST_SUCCESS:
      return {
        ...initialState,
        sites: [...action.data],
      };
    case SITE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default siteListReducer;
