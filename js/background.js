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

// 鱼吧 id
const GROUP_ID = "5093593";
let timestamp = Math.random();

// 简单封装请求
function request(method, url, async, callback, header = {},data = null){
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    if (Object.keys(header).length) {
        for(let key in header){
            xhr.setRequestHeader(key, header[key]);
        }
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.response));
        }
    }
    xhr.send(data);
}

// 获取 cookies
chrome.cookies.getAll({
    // url: 'https://www.douyu.com/'
    url: 'https://tieba.baidu.com/'
},(cookies) => {
    // console.log(cookies);
    // let cookie = [];
    // for(let item of cookies){
    //     cookie.push(`${item.name}=${item.value}`);
    // }
    // 已经获取到了 cookie, 发送网络请求时会自动带上 cookie
    request('get', `https://yuba.douyu.com/wbapi/web/group/head?group_id=${GROUP_ID}&timestamp=${timestamp}`, false, (result) => {
        // 获取当前经验值,签到时必需参数
        let exp = result.data.group_exp;
        let sendData = new FormData();
        sendData.append('group_id', GROUP_ID);
        sendData.append('cur_exp', exp);
        request('post', `https://yuba.douyu.com/ybapi/topic/sign?timestamp=${timestamp}`, false, (data) => {
            console.log(data);
        }, {
            origin: 'https://yuba.douyu.com',
            referer: `https://yuba.douyu.com/group/${GROUP_ID}`
        },sendData);
    });
});