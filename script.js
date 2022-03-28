const div = document.querySelector('.root');
const btn = document.querySelector('button');
function XML() {
    const hi = new XMLHttpRequest();
    hi.onload = function () {
        div.innerHTML = this.responseText;
    }
    hi.open('GET', './reference.txt');
    hi.send();
}
btn.addEventListener('click', XML);
