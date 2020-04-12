export default () => {
  if (process.env.NODE_ENV === 'production')
    return 'https://idiq-challenge.herokuapp.com';
  return 'http://localhost:5000';
};
