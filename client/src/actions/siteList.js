import request from 'axios';

export const SITE_LIST_REQUEST = 'SITE_LIST_REQUEST';
export const SITE_LIST_SUCCESS = 'SITE_LIST_SUCCESS';
export const SITE_LIST_FAILURE = 'SITE_LIST_FAILURE';

const siteListRequest = () => ({
  type: SITE_LIST_REQUEST,
});

const siteListRequestSuccess = data => ({
  type: SITE_LIST_SUCCESS,
  data,
});

const siteListRequestFailure = err => ({
  type: SITE_LIST_FAILURE,
  err,
});

export const getSiteList = () => dispatch => {
  dispatch(siteListRequest());
  return request
    .get('http://localhost:3001/sites')
    .then(res => {
      dispatch(siteListRequestSuccess(res.data));
    })
    .catch(err => {
      dispatch(siteListRequestFailure(err));
    });
};
