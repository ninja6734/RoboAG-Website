
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
    console.log("loaded");
};

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelector('.nav-buttons');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    let toggle = 0;

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
            navButtons.append(buttons[i]);
        }
        else {
            dropdownContent.prepend(buttons[i]);
        }
    }
    dropdown.style.display = dropdownContent.children.length > 0 ? 'block' : 'none';
    };
    window.addEventListener('resize', updateNavigation);
    updateNavigation();
    document.querySelector('.dropdown-btn').addEventListener('click', () => {
        toggle += 1;
        if(toggle % 2 == 1){
            dropdown.classList.add('open');
        }
        else{
            dropdown.classList.remove('open');
        }
      });
});
