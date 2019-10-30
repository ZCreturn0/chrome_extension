chrome.browserAction.setBadgeText({
    text: '憨'
});
chrome.browserAction.setBadgeBackgroundColor({
    color: [255, 0, 0, 255]
});
chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'img/icon.png',
    title: 'hanser',
    message: 'hanser!hanser!hanser!hanser!hanser!'
});