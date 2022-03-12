const hamburger = document.querySelector('[data-hamburger]')
const close = document.querySelector('[data-close]')
const previous = document.querySelector('[data-previous]')
const next = document.querySelector('[data-next]')
const links = document.querySelector('[data-links]')
const lightBox = document.querySelector('.lightBox')
const mobile_img = document.querySelectorAll('[data-mobile]')
const desktop_img = document.querySelectorAll('[data-desktop]')
const text_part = document.querySelectorAll('[data-text]')

class roomPage {
    constructor() {

    }
    openClose() {
        hamburger.addEventListener('click', _ => {
            links.style.display = 'flex';
            lightBox.style.display = ' block';
        })
        close.addEventListener('click', _ => {
            links.style.display = 'none';
            lightBox.style.display = ' none';
        })
    }

    slideShow() {
        let slide = 1;

        previous.addEventListener('click', _ => {
            slide--;
            if (slide == 0) { slide = mobile_img.length };
            slides(slide);
            // console.log(`from previous ${slide}`);
        })
        next.addEventListener('click', _ => {
            if (slide == mobile_img.length) { slide = 0 }
            slide++;
            slides(slide);
            // console.log(`from next ${slide}`);
        })

        slides(slide);
        function slides(value) {
            mobile_img.forEach(img => {
                img.style.display = 'none'
            })
            desktop_img.forEach(img => {
                img.style.display = 'none'
            })
            text_part.forEach(text => {
                text.style.display = 'none'
            })
            let currentSlide = value - 1;
            // console.log(`from slides function ${currentSlide}`);
            if (matchMedia('(min-width: 768px)').matches) {
                text_part[currentSlide].style.display = 'block';
                return desktop_img[currentSlide].style.display = 'block';
            }
            mobile_img[currentSlide].style.display = 'block';
            text_part[currentSlide].style.display = 'block';

        }
    }
}

const customer = new roomPage();
customer.slideShow();
customer.openClose();