// 为 icon 加上 badge
chrome.browserAction.setBadgeText({
    text: '憨'
});
chrome.browserAction.setBadgeBackgroundColor({
    color: [255, 0, 0, 255]
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

$.ajax({
    url: 'https://yuba.douyu.com/group/765880',
    type: 'get',
    success: function (res) {
        console.log(res);
        console.log(document.cookie);
    }
})