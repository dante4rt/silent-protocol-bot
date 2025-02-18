const axios = require('axios');
const { POSITION_URL } = require('../config/constants');
const { getHeaders } = require('../utils/headers');
const { logInfo, logWarn, logError } = require('../utils/logger');

async function getPosition(token, index) {
  try {
    const response = await axios.get(POSITION_URL, {
      headers: getHeaders(token),
    });
    if (response.status === 200) {
      const data = response.data;
      logInfo(
        `[Token ${index}] 📍 Position: Behind ${data.behind}, ⏳ Time Remaining: ${data.timeRemaining}`
      );
      return data;
    }
    logWarn(
      `[Token ${index}] ❗ Failed to fetch position. Status: ${response.status}`
    );
  } catch (e) {
    logError(
      `[Token ${index}] ❌ Error fetching position: ${e}`
    );
  }
}

module.exports = { getPosition };
