const axios = require('axios');
const { PING_URL } = require('../config/constants');
const { getHeaders } = require('../utils/headers');
const { logSuccess, logWarn, logError } = require('../utils/logger');

async function pingServer(token) {
  try {
    const response = await axios.get(PING_URL, { headers: getHeaders(token) });
    if (response.status === 200) {
      const data = response.data;
      logSuccess(
        `[Token ${token.substring(0, 6)}...] 🏓 Ping Status: ${JSON.stringify(
          data.status
        )}`
      );
      return data;
    }
    logWarn(
      `[Token ${token.substring(0, 6)}...] ❗ Failed to ping. Status: ${
        response.status
      }`
    );
  } catch (e) {
    logError(`[Token ${token.substring(0, 6)}...] ❌ Error pinging: ${e}`);
  }
}

module.exports = { pingServer };
