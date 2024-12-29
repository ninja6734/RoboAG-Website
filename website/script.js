
function initCss(){
    let url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf("/")+1);
    let cssName = filename.replace(".html",".css");
        let css = document.createElement("link");
        css.href = cssName;
        css.rel = "stylesheet";

        document.head.appendChild(css);
}

window.onload = function(){
    initCss();
};

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelector('.nav-buttons');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-btn');

    const updateNavigation = () => {
    const navbarWidth = document.querySelector('.nav-bar').offsetWidth;
    const dropButtons = Array.from(dropdownContent.children);
    let totalWidth = dropdownBtn.offsetWidth;
    let buttonWidth = [];
    const buttons = Array.from(navButtons.children);
    
    // Move all buttons back to the nav initially
    buttons.forEach(button => {
        buttonWidth.push(button.offsetWidth);
    });
    console.log(buttonWidth);
    console.log(buttons);

    for (let i = 0; i < buttons.length; i++) {
        totalWidth += buttonWidth[i] + 15;
        if(totalWidth < navbarWidth){
            navButtons.prepend(buttons[i]);
        }
        else {
            dropdownContent.prepend(buttons[i]);
        }
    }
    };
    window.addEventListener('resize', updateNavigation);
    updateNavigation();
});
