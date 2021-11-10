var initViewport = function(height){
    var metaEl = document.querySelector("#viewportMeta");
    var content = "width=device-width,initial-scale=1.0,user-scalable=no,maximum-scale=1.0,height=" + height;
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', content);
}
initViewport(window.innerHeight);

var addEvenListener = function(callback, eventName) {
    let addEvenListenerFn = window.addEventListener || window.attatchEvent;
    let messageEvent = window.addEventListener ? eventName : "on" + eventName;
    addEvenListenerFn(messageEvent, callback, false);
}

addEvenListener(function(){
    setTimeout(function(){
        initViewport(window.innerHeight);
    },300)
},"orientationchange")