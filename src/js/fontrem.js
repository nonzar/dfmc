(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth >= 2560){
                docEl.style.fontSize = '36px';
            }else if(clientWidth <= 600){
                docEl.style.fontSize = '12px';
            }else{
                docEl.style.fontSize = 24 * (clientWidth / 1920) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);