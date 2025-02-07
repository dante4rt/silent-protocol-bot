const axios = require('axios');
const { POSITION_URL } = require('../config/constants');
const { getHeaders } = require('../utils/headers');
const { logInfo, logWarn, logError } = require('../utils/logger');

async function getPosition(token) {
  try {
    const response = await axios.get(POSITION_URL, {
      headers: getHeaders(token),
    });
    if (response.status === 200) {
      const data = response.data;
      logInfo(
        `[Token ${token.substring(0, 6)}...] 📍 Position: Behind ${
          data.behind
        }, ⏳ Time Remaining: ${data.timeRemaining}`
      );
      return data;
    }
    logWarn(
      `[Token ${token.substring(
        0,
        6
      )}...] ❗ Failed to fetch position. Status: ${response.status}`
    );
  } catch (e) {
    logError(
      `[Token ${token.substring(0, 6)}...] ❌ Error fetching position: ${e}`
    );
  }
}

module.exports = { getPosition };
