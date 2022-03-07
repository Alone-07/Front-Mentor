const dayContainer = document.querySelector('[data-days]');
const hourContainer = document.querySelector('[data-hours]');
const minuteContainer = document.querySelector('[data-minutes]');
const secondContainer = document.querySelector('[data-seconds]');

function timer() {
    let expectedDate = Date.parse('2022/05/03');
    // let date = new Date();
    let currentDate = Date.now();

    let gap = expectedDate - currentDate;

    let seconds = 1000;
    let minute = seconds * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / seconds);

    dayContainer.innerText = d.toString();
    hourContainer.innerText = h.toString();
    minuteContainer.innerText = m.toString();
    secondContainer.innerText = s.toString();

    setTimeout(timer, 1000);
}
timer();
