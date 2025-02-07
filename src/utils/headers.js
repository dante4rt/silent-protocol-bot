function getHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: '*/*',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  };
}

module.exports = { getHeaders };
