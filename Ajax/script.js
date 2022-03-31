const btn = document.querySelector('button');
const div = document.querySelector('.root');

function ajax() {
    const page = new XMLHttpRequest();
    page.onload = function () {
        div.innerHTML = this.responseText;
    }
    page.open('GET', '/list.html', true);
    page.send();
}
btn.addEventListener('click', ajax);