// For nav open and close
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('[data-nav]');
const slideImg = document.querySelectorAll('[data-img]');
const thumbImg = document.querySelectorAll('[data-thumb]');
const lbThumbImg = document.querySelectorAll('[data-lbthumb]');
const lbSlideImg = document.querySelectorAll('[data-lbimg]');
const lb = document.querySelector('.lightbox');


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

// -------x-x-----x-x-x-x-x-x-x-x-x-x--------x-x-x------
let lbSlide = 0;
if (matchMedia('(min-width: 768px)').matches) {
    slideImg.forEach(e => {
        e.addEventListener('click', _ => {
            let data = e.dataset.img;
            lbSlide += parseFloat(data);
            lb.style.display = 'flex';
            lightboxSlideShow(data);
        })
    });
}
function preNext() {
    let lbPre = document.querySelector('[data-lbpre]');
    let lbnext = document.querySelector('[data-lbNext]');
    lbPre.addEventListener('click', _ => {
        console.log(' previous lb Slide ' + lbSlide);
        let lbData = lbSlide - 1;
        if (lbData == 0) { lbData = lbSlideImg.length };
        lbSlide = lbData;
        console.log(' previous lb data ' + lbData);
        lightboxSlideShow(lbData);
    })
    lbnext.addEventListener('click', _ => {
        console.log(' next lb Slide ' + lbSlide);
        let lbData1 = lbSlide + 1;
        if (lbData1 > lbSlideImg.length) { lbData1 = 1 }
        lbSlide = lbData1;
        console.log(' next lb data1 ' + lbData1);
        lightboxSlideShow(lbData1);
    })

    lbThumbImg.forEach(e => {

        e.addEventListener('click', _ => {
            let data = e.dataset.lbthumb;
            lightboxSlideShow(data);
        })
    })
}
preNext();
// lightbox
function lightboxSlideShow(value) {
    const lbClose = document.querySelector('.lightbox_close');
    lbClose.addEventListener('click', _ => {
        lb.style.display = 'none';
    })
    lbSlideImg.forEach(e => {
        e.style.display = 'none';
    })
    lbThumbImg.forEach(e => {
        e.classList.remove('opacity1');
    })
    let countdown = value;
    let slideValue = countdown - 1;
    console.log('lightbox function slideValue: ' + slideValue);
    lbSlideImg[slideValue].style.display = 'block';
    lbThumbImg[slideValue].classList.add('opacity1');

}
// lightboxSlideShow(1);

thumbImg.forEach(e => {
    e.addEventListener('click', _ => {
        let data = e.dataset.thumb;
        slideShow(data);
    })
})
function slideShow(value) {
    slideImg.forEach(e => {
        e.style.display = 'none';
    })

    // Thumbnail img
    thumbImg.forEach(e => {
        e.classList.remove('opacity');
    })
    let countdown = value;
    let slideValue = countdown - 1;
    console.log('phone Slide' + slideValue);
    slideImg[slideValue].style.display = 'block';
    thumbImg[slideValue].classList.add('opacity');
}
slideShow(slide);

// --------------XXXXXX-------------XXXXXXX-------------

// now only add to cart and cart items

function cart() {
    let plus = document.querySelector('[data-plus]');
    let minus = document.querySelector('[data-minus]');
    let items = document.querySelector('[data-items]');
    let times = document.querySelector('[data-times]');
    let cost = document.querySelector('[data-cost]');
    let del = document.querySelector('[data-delete]');
    let empty = document.querySelector('[data-empty]');
    let cart = document.querySelector('[data-cart]');
    let cartContainer = document.querySelector('[data-cartContainer]');
    let toCart = document.querySelector('[data-addtocart]');
    let countdown = 1;

    plus.addEventListener('click', _ => {
        let data = (countdown += 1);
        items.innerText = data;
        console.log(data);
    })
    minus.addEventListener('click', _ => {
        if (countdown <= 1) { countdown = 2 };
        let data = (countdown -= 1);
        items.innerText = data;
        console.log(data);
    })

    del.addEventListener('click', _ => {
        empty.style.display = 'flex';
        cart.dataset.cart = '0';
    })
    cart.addEventListener('click', _ => {
        cartContainer.classList.toggle('blocks');
        // console.log(cartContainer)
    })
    toCart.addEventListener('click', calculation);
    function calculation() {
        empty.style.display = 'none';
        let totalCost = (countdown * 125).toFixed(2);
        cost.innerText = '$' + totalCost;
        times.innerText = countdown;
        cart.dataset.cart = countdown;
        console.log(totalCost);
    }
}
cart();