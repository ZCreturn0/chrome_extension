// 注入页面的 js
window.onload = () => {
    console.log(document.getElementsByClassName('LuckyStartEnter')[0])
    document.getElementsByClassName('LuckyStartEnter')[0].remove();
}