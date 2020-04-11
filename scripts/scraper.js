const request = require('axios');
const fs = require('fs');
const sites = require('./constants/scraperSites');
const asyncForEach = require('./utilities/asyncForEach');
const getProgressBar = require('./utilities/getProgressBar');

const getFileName = siteName => `${__dirname}/output/scraper/${siteName}.html`;

const getSites = async () => {
  const progressBar = getProgressBar('Scraping Sites');

  const getSite = async ({ name, url }) => {
    const options = {
      method: 'GET',
      url,
    };
    const { data } = await request(options);
    await fs.writeFileSync(getFileName(name), data.trim());
    progressBar.increment();
  };

  progressBar.start(sites.length, 0);
  await asyncForEach(sites, getSite);
  progressBar.stop();
};

const main = async () => {
  try {
    console.log('Starting to scrape selected sites.');
    await getSites();
    console.log(
      'All sites have been downloaded successfully.  Please check the output/scraper directory for the html documents.',
    );
    process.exit(0);
  } catch (e) {
    console.log(
      'Oops!  We ran into an error with the site scrape. Please report this to one of the engineers.',
    );
    console.error(e);
    process.exit(0);
  }
};

main();
