// For nav open and close
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('[data-nav]');
const slideImg = document.querySelectorAll('[data-img]');
const thumbImg = document.querySelectorAll('[data-thumb]');

menu.addEventListener('click', _ => {
    nav.style.display = 'block';
});
close.addEventListener('click', _ => {
    nav.style.display = 'none';
})

// for slideShow
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let slide = 1;
previous.addEventListener('click', _ => {
    slide -= 1;
    if (slide == 0) { slide = slideImg.length };
    slideShow(slide);
    // console.log('by Pre ' + slide);
})
next.addEventListener('click', _ => {
    if (slide == slideImg.length) { slide = 0 };
    slide += 1;
    slideShow(slide);
    // console.log('by next ' + slide)
})

function slideShow(value) {
    slideImg.forEach(e => {
        e.style.display = 'none';
    })

    // Thumbnail img
    thumbImg.forEach(e => {
        e.classList.remove('opacity');
        e.addEventListener('click', _ => {
            let data = e.dataset.thumb;
            slideShow(data);
        })
    })
    let countdown = value;
    let slideValue = countdown - 1;
    console.log(slideValue);
    slideImg[slideValue].style.display = 'block';
    thumbImg[slideValue].classList.add('opacity');
}
slideShow(slide);
