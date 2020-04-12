import request from 'axios';
import * as SnackbarActions from './snackbars';
import getServerUrl from 'constants/getServerUrl';

import {
  siteHTMLRequestMessage,
  requestSiteHTMLSnackbar,
  successRequestSiteHTMLSnackbar,
  failureRequestSiteHTMLSnackbar,
} from 'constants/siteHTML';

export const SITE_HTML_REQUEST = 'SITE_HTML_REQUEST';
export const SITE_HTML_SUCCESS = 'SITE_HTML_SUCCESS';
export const SITE_HTML_FAILURE = 'SITE_HTML_FAILURE';

const siteHTMLRequest = () => ({
  type: SITE_HTML_REQUEST,
});

const siteHTMLRequestSuccess = ({ name, html }) => ({
  type: SITE_HTML_SUCCESS,
  name,
  html,
});

const siteHTMLRequestFailure = err => ({
  type: SITE_HTML_FAILURE,
  err,
});

export const getSiteHTML = ({ url, name }) => dispatch => {
  dispatch(SnackbarActions.pushSnackbar(requestSiteHTMLSnackbar));
  dispatch(siteHTMLRequest());
  const requestURL = encodeURI(`${getServerUrl()}/sites/${name}`);
  return request
    .get(requestURL)
    .then(res => {
      dispatch(siteHTMLRequestSuccess({ name, html: res.data }));
      dispatch(SnackbarActions.clearSnackbarByMessage(siteHTMLRequestMessage));
      dispatch(SnackbarActions.pushSnackbar(successRequestSiteHTMLSnackbar));
      return res;
    })
    .catch(err => {
      dispatch(siteHTMLRequestFailure(err));
      dispatch(SnackbarActions.clearSnackbarByMessage(siteHTMLRequestMessage));
      dispatch(SnackbarActions.pushSnackbar(failureRequestSiteHTMLSnackbar));
    });
};
