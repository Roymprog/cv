function setHeight() {
    var body = document.body;
    var html = document.documentElement;
    
    var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    var scrollbar = document.getElementById("scrollbar");
    var windowHeight = window.innerHeight;
    // Height scrollbar is proportional to height of the window relative to the html page
    // size and should fit in 60% of the window by design(CSS)
    scrollbar.style.height = (windowHeight / pageHeight * 0.6 * windowHeight) + 'px';
};

window.addEventListener('scroll', function (e) {
    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight;

    var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    // var sideBarHeight = document.getElementsByClassName('table-wrapper').style.height;
    var lastKnownScrollPosition = window.scrollY;
    // The scrollbar by design is 20% from the top of the page and scales with the last known position
    // relative to the difference between html page size and window size
    var scrollbarYPosition = windowHeight * 0.2 + lastKnownScrollPosition / ( pageHeight - windowHeight ) * 0.6 * windowHeight * (1 - windowHeight/pageHeight);

    var scrollbar = document.getElementById('scrollbar');
    scrollbar.style.top = scrollbarYPosition + 'px';

});