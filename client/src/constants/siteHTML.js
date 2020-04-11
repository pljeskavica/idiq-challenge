const requestSnackbar = message => ({
  variant: 'info',
  message,
});
const successSnackbar = message => ({
  variant: 'success',
  message,
});
const failureSnackbar = message => ({
  variant: 'error',
  message,
});

export const siteHTMLRequestMessage = `Downloading Site HTML`;
export const siteHTMLSuccessMessage = `Successfully downloaded HTML.`;
export const siteHTMLFailureMessage = `Oops! We ran into an error downloading the HTML.  Please try again later.`;

export const requestSiteHTMLSnackbar = requestSnackbar(siteHTMLRequestMessage);
export const successRequestSiteHTMLSnackbar = successSnackbar(
  siteHTMLSuccessMessage,
);
export const failureRequestSiteHTMLSnackbar = failureSnackbar(
  siteHTMLFailureMessage,
);
