const body = document.body;
const sun = document.querySelector('[data-sun]');
const moon = document.querySelector('[data-moon]');
const input = document.querySelector('[type=text]');
const form = document.querySelector('[data-form]');
const left = document.querySelector('[data-left]');
const leftContainer = document.querySelector('[data-leftContainer]');
let count = (function () {
    let countdown = 0;
    return function () {
        countdown++;
        return countdown;
    }
})();

// setting localstorage value by user color preferences.
if (matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('day', 'moon');
} else {
    localStorage.setItem('day', 'sun');
}
const preferMode = localStorage.getItem('day');
// to set theme according to localStorage!!!
if (preferMode == 'sun') {
    mode(preferMode);
} else {
    mode(preferMode);
}
sun.addEventListener('click', _ => {
    let data = sun.dataset.sun;
    mode(data);
})
moon.addEventListener('click', _ => {
    let data = moon.dataset.moon;
    mode(data);
})
function mode(value) {
    let modes = value;
    localStorage.setItem('day', modes);
    if (modes == 'sun') {
        body.classList.add('sun');
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
    else {
        body.classList.remove('sun');
        sun.style.display = 'block';
        moon.style.display = 'none';
    }
}
// localStorage.removeItem('listCount')
/*-----------------Theme toggler finished--------------*/
const obj = [];
const countArr = [];
let localList = localStorage.getItem('list');
if (localList != null) {
    let localArr = JSON.parse(localList);
    localArr.forEach(value => {
        obj.push(value);
        labelsLocal(value);
    })
    left.innerText = localArr.length;
}

// console.log(`obj:- ${obj}`);
function toDo() {
    // taking in input value and stored it.
    let inputValue = input.value;
    labels(inputValue);
    left.innerText = (form.childElementCount - 1).toString();
}
input.addEventListener('change', toDo);
// -----------------------------------------------------\


function labels(value, index = 0) {
    // creating label element
    let label = document.createElement('label');
    label.setAttribute('class', 'list');
    // creating radion input
    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('class', '');
    // creating p element
    let p = document.createElement('p');
    p.setAttribute('class', 'listText');
    // insertingg inputValue to p element.
    p.innerText = value;
    // creating span element
    let cross = document.createElement('span');
    cross.setAttribute('class', 'cross');
    // creating img element
    let img = document.createElement('img');
    img.setAttribute('src', "/images/icon-cross.svg");
    // appending img into cross.
    cross.append(img);
    // appending all to label element.
    label.append(radio, p, cross);

    // here we are inserting label before left element
    form.insertBefore(label, leftContainer);
    obj.push(value);
    let objString = JSON.stringify(obj);
    localStorage.setItem('list', objString);

    // -------------------------------------\\
    let dataIndex = count();
    cross.addEventListener('click', _ => {
        cross.parentElement.remove();
        let objIndex = obj.indexOf(value);
        obj.splice(objIndex, 1);
        let objString = JSON.stringify(obj);
        localStorage.setItem('list', objString);
        //for left:-
        left.innerText = (form.childElementCount - 1).toString();

    })
    radio.addEventListener('click', _ => {
        radio.classList.add('radioChecked');
        radio.setAttribute('data-checked', `checked${dataIndex}`);
        countArr.push(dataIndex);
        let countArrStr = JSON.stringify(countArr);
        localStorage.setItem('listCount', countArrStr);
        console.log(`clicked radio:- ${localStorage.getItem('listCount')}`);


    })

    // adding radioChecked class:-


    input.value = '';
}

function labelsLocal(value) {
    // creating label element
    let label = document.createElement('label');
    label.setAttribute('class', 'list');
    // creating radion input
    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('class', '');
    // creating p element
    let p = document.createElement('p');
    p.setAttribute('class', 'listText');
    // insertingg inputValue to p element.
    p.innerText = value;
    // creating span element
    let cross = document.createElement('span');
    cross.setAttribute('class', 'cross');
    // creating img element
    let img = document.createElement('img');
    img.setAttribute('src', "/images/icon-cross.svg");
    // appending img into cross.
    cross.append(img);
    // appending all to label element.
    label.append(radio, p, cross);

    // here we are inserting label before left element
    form.insertBefore(label, leftContainer);

    cross.addEventListener('click', _ => {
        cross.parentElement.remove();
        let objIndex = obj.indexOf(value);
        obj.splice(objIndex, 1);
        let objString = JSON.stringify(obj);
        localStorage.setItem('list', objString);

        //for left:-
        left.innerText = (form.childElementCount - 1).toString();
    });
    let dataIndex = count();
    radio.addEventListener('click', _ => {
        radio.classList.add('radioChecked');
        radio.setAttribute('data-checked', 'checked');
        // adding count to localstorage
        countArr.push(dataIndex);
        let countArrStr = JSON.stringify(countArr);
        localStorage.setItem('listCount', countArrStr);

    })


}
// localStorage.removeItem('list')

// // console.log(form.children[0]);
// let localCount1 = JSON.parse(localStorage.getItem('listCount'));
// console.log(`length: ${localCount1.length}`);