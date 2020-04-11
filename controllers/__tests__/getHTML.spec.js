const getHTML = require('../getHTML');
const request = require('axios');
const sites = require('../../scripts/constants/scraperSites');

jest.mock('axios', () =>
  jest.fn(() => ({
    data: 'ok',
  })),
);

describe('getHTML controller', () => {
  const send = jest.fn();
  let res = {
    send,
  };

  let wrappedFn = id => getHTML({ params: { id } }, res, () => {});
  beforeEach(() => {
    send.mockClear();
  });

  it('should call the correct url', async () => {
    const { name, url } = sites.find(({ name }) => name === 'axios');
    wrappedFn(name);
    const expextedRequestPayload = {
      method: 'GET',
      url,
    };
    const expectedSendPayload = 'ok';
    await expect(request).toHaveBeenCalled();
    await expect(request.mock.calls[0][0]).toEqual(expextedRequestPayload);
    await expect(send).toHaveBeenCalled();
    await expect(send.mock.calls[0][0]).toEqual(expectedSendPayload);
  });
});
