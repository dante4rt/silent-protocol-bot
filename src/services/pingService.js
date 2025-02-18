const axios = require('axios');
const { PING_URL } = require('../config/constants');
const { getHeaders } = require('../utils/headers');
const { logSuccess, logWarn, logError } = require('../utils/logger');

async function pingServer(token, index) {
  try {
    const response = await axios.get(PING_URL, { headers: getHeaders(token) });
    if (response.status === 200) {
      const data = response.data;
      logSuccess(
        `[Token ${index}] 🏓 Ping Status: ${JSON.stringify(data.status)}`
      );
      return data;
    }
    logWarn(
      `[Token ${index}] ❗ Failed to ping. Status: ${response.status}`
    );
  } catch (e) {
    logError(`[Token ${index}] ❌ Error pinging: ${e}`);
  }
}

module.exports = { pingServer };
