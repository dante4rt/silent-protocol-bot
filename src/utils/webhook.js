const axios = require('axios');
const { WEBHOOK_URL } = require('../config/constants');
const { logError, logSuccess, logInfo } = require('./logger');

let lastNotificationTime = 0;
const NOTIFICATION_COOLDOWN = 5 * 60 * 1000; // 5分钟冷却时间

async function sendWebhookNotification(content) {
  try {
    const currentTime = Date.now();
    if (currentTime - lastNotificationTime < NOTIFICATION_COOLDOWN) {
      logInfo('🕒 Notification skipped due to cooldown');
      return;
    }

    // 构建企业微信机器人消息格式
    const message = {
      msgtype: "text",
      text: {
        content: content,
      }
    };

    logInfo(`🤖 Sending webhook notification: ${content}`);
    
    const response = await axios.post(WEBHOOK_URL, message);
    
    if (response.status === 200) {
      lastNotificationTime = currentTime;
      logSuccess('✅ Webhook notification sent successfully');
    } else {
      logError(`❌ Webhook response error: ${response.status} - ${response.statusText}`);
    }
  } catch (e) {
    logError(`❌ Error sending webhook notification: ${e.message}`);
    if (e.response) {
      logError(`Response data: ${JSON.stringify(e.response.data)}`);
    }
  }
}

module.exports = { sendWebhookNotification };