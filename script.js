const div = document.querySelector('.root');
const btn = document.querySelector('button');
function XML() {
    const hi = new XMLHttpRequest();
    hi.onload = function () {
        div.innerHTML = this.responseText;
    }
    hi.open('GET', 'http://todo-app-main-007.netlify.app');
    hi.send();
}
btn.addEventListener('click', XML);
