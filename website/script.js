
function initCss(){
    let url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf("/")+1);
    let cssName = filename.replace(".html",".css");
        let css = document.createElement("link");
        css.href = cssName;
        css.rel = "stylesheet";

        document.head.appendChild(css);

    if(filename == "news.html"){
        let newsContainer = url.substring(0, url.lastIndexOf("/")) + "/news/exampleNews.html";
        console.log(fetch(newsContainer));
    }
}

window.onload = function(){
    initCss();
};