
function initCss(){
    let url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf("/")+1);
    let cssName = filename.replace(".html",".css");
        let css = document.createElement("link");
        css.href = cssName;
        css.rel = "stylesheet";

        console.log(css)

        document.head.appendChild(css);
}

window.onload = function(){
    console.log("yay")
    initCss();
};