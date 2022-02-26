const hamburger = document.querySelector('[data-hamburger]');
const close = document.querySelector('[data-close]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const dropDownLinks = document.querySelectorAll('[data-dropdown]');
const dropdownContent = document.querySelectorAll('.dropDownContent');

function showHide() {
    // if (window.matchMedia('(min-width: 834px)').matches) {
    //     return console.log('%c all mobile features are closed', 'color: orangered; font-size: 1rem;')
    // }
    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('none') == false) {
            hamburger.classList.add('none')
            close.classList.add('block');
            mobileNav.style.display = 'block';
            console.log('close showed')
        }
    })

    close.addEventListener('click', () => {
        if (close.classList.contains('block')) {
            close.classList.remove('block');
            hamburger.classList.remove('none');
            mobileNav.style.display = 'none';
            console.log('close hidded');
        }
    })
    // dropdownContent.forEach(content => {
    //     content.style.display = 'none';
    // })

    dropDownLinks.forEach(link => {
        link.addEventListener('click', () => {
            let data = link.dataset.dropdown;
            let elem = document.querySelector(`#${data}`);
            if (elem.style.display == 'flex') {
                elem.style.display = 'none'
                console.log('dropdown content hidded')
            } else {
                elem.style.display = 'flex'
                console.log('dropdown content showed')
            }
        })
    })

}

showHide();