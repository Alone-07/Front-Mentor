const header = document.querySelector('[data-header]');
const socialMedia = document.querySelector('[data-socialMedia]');
const overView = document.querySelector('[data-overView]');
const OverviewContainer = document.querySelector('[data-overviewContainer]');
const toggle = document.querySelector('[data-toggle]');
const toggler = document.querySelector('[data-toggler]');
const body = document.querySelector('body');
const dark = 'dark';
// const toggleBG = 'linear-gradient(to right , $toggle_grad1, $toggle_grad2)';
toggle.addEventListener('click', () => {
    if (header.classList.contains(dark) != true) {
        toggler.classList.add('animation1');
        toggler.classList.replace('animation2', 'animation1');
        header.classList.add(dark);
        socialMedia.classList.add(dark);
        overView.classList.add(dark);
        body.style.background = 'hsl(230, 17%, 14%)';
        console.log('dark mode added');
    } else {
        toggler.classList.replace('animation1', 'animation2')
        header.classList.remove(dark);
        socialMedia.classList.remove(dark);
        overView.classList.remove(dark);
        body.style.background = '#fff   ';
        console.log('dark mode removed');
    }
})

// header.classList.add(dark);
// socialMedia.classList.add(dark);
// overView.classList.add(dark);
// body.style.background = 'hsl(230, 17%, 14%)';
// console.log(toggle);