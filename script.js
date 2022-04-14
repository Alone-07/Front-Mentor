const rating = document.querySelector('.rating');
const thank = document.querySelector('.thank');
const Rating = document.querySelector('.Rating');
const points = document.querySelector('.points');
const btn = document.querySelector('button[type=submit]');
let point;
rating.addEventListener('click', e => {
    if (e.target.classList.contains('rating')) return;
    let value = e.target.innerText;
    point = value;
    const children = Array.from(rating.children);
    children.forEach(num => {
        num.classList.remove('current');
    });

    e.target.classList.add('current');
})
btn.addEventListener('click', e => {
    if (point == undefined) return;
    Rating.classList.add('none');
    thank.classList.add('block');
    points.innerText = point;
})