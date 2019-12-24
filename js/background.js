// 为 icon 加上 badge
chrome.browserAction.setBadgeText({
    text: '憨'
});
chrome.browserAction.setBadgeBackgroundColor({
    color: [255, 0, 0, 255]
});

const COOKIE_NAMES = ['acf_yb_auth', 'dy_auth', 'wan_auth37wan'];
function getCookie(name) {
    return new Promise((resolve, reject) => {
        chrome.cookies.get({
            url: 'https://yuba.douyu.com/group/765880',
            name
        }, cookies => {
            resolve(cookies);
        });
    });
}

Promise.all(COOKIE_NAMES.map(getCookie))
.then(res => {
    console.log(res);
    let httpOnlyCookies = [];
    for (let item of res) {
        httpOnlyCookies.push(`${item.name}=${item.value}`);
    }
    console.log(httpOnlyCookies.join('; '));
})

// COOKIE_NAMES.forEach(e => {
//     console.log(getCookie(e));
// });

// chrome.webRequest.onBeforeSendHeaders.addListener(details => {
//     console.log(2222);
//     console.log(details);
// }, {urls: ["<all_urls>"]}, ["blocking"]);
// chrome.cookies.getAllCookieStores(cookies => {
//     console.log(cookies);
// })

// 鱼吧 id
// const GROUP_ID = "5093593";
// let timestamp = Math.random();

// // 简单封装请求
// function request(method, url, async, callback, header = {},data = null){
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url, async);
//     if (Object.keys(header).length) {
//         for(let key in header){
//             xhr.setRequestHeader(key, header[key]);
//         }
//     }
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             callback(JSON.parse(xhr.response));
//         }
//     }
//     xhr.send(data);
// }

// $.ajax({
//     url: 'https://yuba.douyu.com/group/765880',
//     type: 'get',
//     success: function (res) {
//         console.log(res);
//         console.log(document.cookie);
//     }
// })
