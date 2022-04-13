const input = document.querySelector('input[type="text"]');
const div = document.querySelector('.root');
let spans = document.querySelector('[data-time]');

const words = ['Helo', 'mother', 'father', 'place', 'hello', 'seat', 'mouse', 'keyboard', 'hi', 'Century', 'Coding', "language!!", 'Programming!!!', 'sad.', 'enjoy', 'helo', '"mother"', 'father,', 'what', 'are', 'YOu', 'DoinG??', 'yOu', 'DuMb', 'just', 'go', 'soMeWheRe', 'eLse!!', 'yoU', 's"U"n', 'oF', 'a', 'b"eAc"H'];
words.map(word => { div.innerHTML += span(word) });

// -----------count down---------------------
const d = new Date();
function sec() {
    let sec = 1000 * 60
    let delay = Date.now() + sec;
    let delyDate = new Date(delay);
    // console.log(`delay:- ${delyDate.getMinutes()}`);
    // console.log(`current:- ${d.getMinutes()}`);
    console.log(`seconds:- ${delyDate.getSeconds()}`);
}

let seconds = 0;
let count = 0;
border(count);
function Type(e) {
    let inputValue = e.target.value;
    inputValue = inputValue.trim();
    // key = " " !!!!!! for space
    if (e.keyCode == 32) {
        wordChecker(inputValue);
        return e.target.value = '';
    }
}
input.addEventListener('keydown', Type);

input.addEventListener('click', e => {
    let interval = setInterval(_ => {
        if (seconds == 60) {
            clearInterval(interval);
            spans.innerText = "00";
            div.innerHTML = '<h1>Refresh page to type Again!!</h1>';
            return input.removeEventListener('keydown', Type);
        }
        seconds += 1;
        if (seconds > 9) {
            return spans.innerText = seconds;
        }
        spans.innerText = '0' + seconds;
        // return sec();

    }, 1000)


})
function span(value) {
    return `<span> ${value} </span>`;
}
function wordChecker(value) {
    let currentValue = value;
    let actualValue = words[count];
    let child = div.children[count];

    if (currentValue == actualValue) {
        count += 1;
        child.style.color = 'lime';
        return border(count);
    }
    child.style.color = 'orangered';
    count += 1;
    return border(count);

}
function border(number) {
    if (number >= words.length) return;
    let child = div.children[number];
    child.style.backgroundColor = 'rgb(164, 231, 164)';

    if (number > 0) {
        let prev = number - 1;
        let prevChild = div.children[prev];
        prevChild.style.background = 'none';
    }
}

// Hiiii