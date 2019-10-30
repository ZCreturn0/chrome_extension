function injectJs(jsPath = 'js/inject.js'){
    // 注入 js 
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.src = chrome.extension.getURL(jsPath);
    document.body.append(script);
}
window.onload = () => {
    injectJs();
}