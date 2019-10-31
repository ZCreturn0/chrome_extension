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
    // url: 'https://www.douyu.com/'
    url: 'https://tieba.baidu.com/'
},(cookies) => {
    // console.log(cookies);
    let cookieStr = [];
    for(let cookie of cookies){
        console.log(`${cookie.name} = ${cookie.value}`);
        cookieStr.push(`${cookie.name}=${cookie.value}`);
    }
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
        }
    }

    xhr.open('get', 'https://tieba.baidu.com/hottopic/browse/topicList', true);
    xhr.setRequestHeader('Host', 'tieba.baidu.com');
    xhr.setRequestHeader('Referer', 'https://tieba.baidu.com/index.html');
    xhr.setRequestHeader('Cookie', cookieStr.join(';'));
    xhr.send(null);
});