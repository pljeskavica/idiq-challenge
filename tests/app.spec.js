const request = require('supertest');
const app = require('../app');
const siteList = require('../scripts/constants/scraperSites');
const getHTML = require('../controllers/getHTML');

jest.mock('../controllers/getHTML', () =>
  jest.fn((req, res) => res.send('ok')),
);

describe('Routes', () => {
  it('returns hello on /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('hello');
  });
  it('returns list of sites on /sites', async () => {
    const res = await request(app).get('/sites');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(siteList);
  });
  it('calls the getHTML controller on /sites/:id', async () => {
    const res = await request(app).get('/sites/axios');
    expect(getHTML).toHaveBeenCalled();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('ok');
  });
});
