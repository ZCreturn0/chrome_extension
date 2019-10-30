// 为 icon 加上 badge
chrome.browserAction.setBadgeText({
    text: '憨'
});
chrome.browserAction.setBadgeBackgroundColor({
    color: [255, 0, 0, 255]
});

// 弹出 notification
chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'img/icon.png',
    title: 'hanser',
    message: 'hanser!hanser!hanser!hanser!hanser!'
});

// 获取 cookies
chrome.cookies.getAll({
    url: 'https://www.douyu.com/'
},(cookies) => {
    console.log(cookies);
});