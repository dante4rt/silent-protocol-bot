const axios = require('axios');
const { POSITION_URL, POSITION_THRESHOLD } = require('../config/constants');
const { getHeaders } = require('../utils/headers');
const { logInfo, logWarn, logError } = require('../utils/logger');
const { sendWebhookNotification } = require('../utils/webhook');

async function getPosition(token, index) {
  try {
    logInfo(`[Token ${index}] 🔍 Checking position...`);
    
    const response = await axios.get(POSITION_URL, {
      headers: getHeaders(token),
    });
    
    if (response.status === 200) {
      const data = response.data;
      logInfo(
        `[Token ${index}] 📍 Position: Behind ${data.behind}, ⏳ Time Remaining: ${data.timeRemaining}`
      );
      
      // 检查位置并发送通知
      if (data.behind < POSITION_THRESHOLD) {
        const message = `🚨 重要提醒!\n\nToken ${index} 即将轮到:\n` + 
                       `- 当前位置: 前方还有 ${data.behind} 人\n` +
                       `- 剩余时间: ${data.timeRemaining}\n` +
                       `- Token: ${token.slice(0, 10)}...${token.slice(-15)}`;
                       
        logInfo(`[Token ${index}] 🚀 Preparing to send notification`);
        await sendWebhookNotification(message);
      }
      
      return data;
    }
    
    logWarn(
      `[Token ${index}] ❗ Failed to fetch position. Status: ${response.status}`
    );
  } catch (e) {
    logError(
      `[Token ${index}] ❌ Error fetching position: ${e.message}`
    );
    if (e.response) {
      logError(`Response data: ${JSON.stringify(e.response.data)}`);
    }
  }
}

module.exports = { getPosition };
