const btn = document.querySelector('[data-toggle]');
const body = document.body;
const change = localStorage.getItem('changes');
// let toggleValue = btn.dataset.toggle;
let mode = localStorage.getItem('mode');
// localStorage.removeItem('changes');
// if (mode == 'light') {
//     localStorage.setItem('mode', 'light');
//     document.body.classList.add('darkTheme');
//     console.log('dark mode already enabled')
// }
// btn.addEventListener('click', () => {

//     let mode = localStorage.getItem('mode');
//     if (mode != 'light') {
//         localStorage.setItem('mode', 'light');
//         document.body.classList.add('darkTheme');
//         console.log('Dark theme added');
//     } else {
//         localStorage.setItem('mode', 'dark');
//         document.body.classList.remove('darkTheme');
//         console.log('Dark theme removed');
//     }
// })

//Toggle using data-attribute

// function darktheme() {
//     body.classList.add('darkTheme');
//     btn.dataset.toggle = 'light';
//     console.log('darke theme enabled');
// }

// function lightheme() {
//     body.classList.remove('darkTheme');
//     btn.dataset.toggle = 'dark';
//     console.log('darke theme disabled');
// }

// // console.log(btn.dataset);
// if (toggleValue != 'light') {
//     body.classList.add('darkTheme');
//     console.log(toggleValue)
// }
// btn.addEventListener('click', () => {
//     let toggleValue = btn.dataset.toggle;
//     // console.log(toggleValue)
//     if (toggleValue == 'light') {
//         lightheme();
//     }
//     else {
//         darktheme();
//     }
// })


// by Color preferences:-
function darktheme() {
    body.classList.add('darkTheme');
    localStorage.setItem('mode', 'light');
    console.log('darke mode enabled');
}

function lightheme() {
    body.classList.remove('darkTheme');
    localStorage.setItem('mode', 'dark');
    console.log('darke mode disabled');
}

const myThemeChecker = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('Theme already:- ');
        darktheme();
    } else {
        console.log('Theme already:-');
        lightheme();
    }
}
// myThemeChecker();
const selctionByUser = () => {
    if (mode != 'dark') {
        darktheme();
    }
}
// it will execute to according to change in localStorage;
if (change != 'changed') {
    myThemeChecker();
    console.log('By watchMedia!!')
} else {
    selctionByUser();
    console.log('It already changed by user. So, the watchMedia don\'t work');
}

btn.addEventListener('click', () => {
    let mode = localStorage.getItem('mode');

    if (mode != 'light') {
        darktheme();
        localStorage.setItem('changes', 'changed');
    } else {
        lightheme();
        localStorage.setItem('changes', 'changed');
    }
})
