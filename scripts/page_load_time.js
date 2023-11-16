(function () {
    window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    var footer= document.getElementsByClassName("footer__loadtime-text")
    footer[0].textContent = `Page loadtime: ${loadTime} ms`
});
})();