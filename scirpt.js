const header = document.querySelector('[data-header]');
const socialMedia = document.querySelector('[data-socialMedia]');
const overView = document.querySelector('[data-overView]');
const OverviewContainer = document.querySelector('[data-overviewContainer]');
const toggle = document.querySelector('[data-toggle]');
const toggler = document.querySelector('[data-toggler]');
const body = document.querySelector('body');
const dark = 'dark';
const light = 'light';
// localStorage.removeItem('mode');
let modeOutside = localStorage.getItem('mode');
if (modeOutside == dark) {
    darkMode();
    console.log('dark mode enabled')
}

// header.classList.contains(dark) != true  
toggle.addEventListener('click', () => {
    let mode = localStorage.getItem('mode');
    if (mode != dark) {
        darkMode();
        localStorage.setItem('mode', dark);
        console.log('dark mode added');
    } else {
        lightMode();
        localStorage.setItem('mode', light);
        console.log('dark mode removed');
    }
})

function darkMode() {
    toggler.classList.add('animation1');
    toggler.classList.replace('animation2', 'animation1');
    header.classList.add(dark);
    socialMedia.classList.add(dark);
    overView.classList.add(dark);
    body.style.background = 'hsl(230, 17%, 14%)';
}
function lightMode() {
    toggler.classList.replace('animation1', 'animation2')
    header.classList.remove(dark);
    socialMedia.classList.remove(dark);
    overView.classList.remove(dark);
    body.style.background = '#fff   ';
}