const request = require('axios');
const sites = require('../scripts/constants/scraperSites');

const getHTML = async (req, res, next) => {
  const { id } = req.params || {};
  const { url } = sites.find(({ name }) => name === id) || {};
  const options = {
    method: 'GET',
    url,
  };
  try {
    const { data } = await request(options);
    res.send(data);
  } catch (e) {
    res.send(e);
  }
};

module.exports = getHTML;
