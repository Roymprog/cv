function setHeight() {
    var body = document.body,
    html = document.documentElement;
    var scrollbar = document.getElementById("scrollbar");
    var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight );
    var windowHeight = window.innerHeight;

    scrollbar.style.height = ''+(windowHeight / pageHeight * 0.6* windowHeight)+'px';
};