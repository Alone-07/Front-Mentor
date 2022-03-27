const form = document.querySelector('form');
const ul = document.querySelector('.listContainer');
const left = document.querySelector('.left');
const all = document.querySelector('.all');
const active = document.querySelector('.active');
const complete = document.querySelector('.complete');
const clear = document.querySelector('.clear');
const stats = document.querySelector('.stats');


let todos = JSON.parse(localStorage.getItem('task')) || [];
if (todos) {
    todos.map(task => createTask(task));
    count();
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const input = this.addList;
    const inputValue = input.value;
    const task = {
        name: inputValue,
        id: Date.now(),
        isComplete: false
    };
    // pushing task to todos arr :-
    todos.push(task);
    // passing task this function to create "Li":-
    createTask(task);
    // to localStorage:-
    localStorage.setItem('task', JSON.stringify(todos));
    // to clear input field:-
    input.value = '';
    // to count:-
    count();
})
function createTask(task) {
    let li = document.createElement('li');
    li.setAttribute('id', task.id);
    !task.isComplete ? li.classList.add('active') : li.classList.add('completed');
    let Elem = `
    <input type='checkbox' id='${task.id}' ${task.isComplete ? 'checked' : ''}>
    <span class='text'${!task.isComplete ? 'contenteditable' : ''}>${task.name}</span>
    <span class='removeCont'><img src='/images/icon-cross.svg' alt='delete' class='remove'></span>
    `;
    li.innerHTML = Elem;
    ul.append(li);
}
// for ul input:-
ul.addEventListener('input', e => {
    let taskId = e.target.closest('li').id; //(or) e.target.parentElement.id;
    let Elem = e.target;
    updateTask(taskId, Elem);
})
// for ul click:-
ul.addEventListener('click', e => {
    let removId = e.target.closest('li'); //(or) e.target.parentElement.id;
    let removeElem = e.target;
    if (removeElem.classList.contains('removeCont') || e.target.classList.contains('remove')) {
        removId.remove();
        removeTask(removId);
        count();
    }

})

//for Enter Key:-
ul.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        e.preventDefault();
    }
})

function updateTask(taskId, elem) {
    let updatingTask = todos.find(task => taskId == task.id);

    if (elem.hasAttribute('contenteditable')) {
        updatingTask.name = elem.innerText;
        localStorage.setItem('task', JSON.stringify(todos));
        return;
    }
    let parent = elem.closest('li');
    let span = elem.nextElementSibling;
    updatingTask.isComplete = !updatingTask.isComplete;
    if (updatingTask.isComplete) {
        span.removeAttribute('contenteditable');
        elem.setAttribute('checked', '');
        parent.classList.add('completed');
        parent.classList.remove('active');
    } else {
        elem.removeAttribute('checked');
        span.setAttribute('contenteditable', '');
        parent.classList.remove('completed');
        parent.classList.add('active');

    }
    localStorage.setItem('task', JSON.stringify(todos));
}
// localStorage.clear()

// removing task:-
function removeTask(task) {
    let unRemoveTask = todos.filter(tasks => task.id != tasks.id);
    todos = unRemoveTask;

    localStorage.setItem('task', JSON.stringify(todos));
}

function count() {
    left.innerText = todos.length.toString();
}

clear.addEventListener('click', e => {
    let completed = todos.filter(task => task.isComplete != true);

    todos = completed;
    localStorage.setItem('task', JSON.stringify(todos));
    location.reload(true);
})

stats.addEventListener('click', e => {
    let li = document.querySelectorAll('li');
    li = Array.from(li);
    if (li == null || li == undefined) { return; }

    // removing clr class:-
    let children = e.currentTarget.children;
    children = Array.from(children);
    children.forEach(child => {
        child.classList.remove('clr');
    })

    let elem = e.target.classList;
    // for localStorange:-
    localStorage.setItem('selected', elem);
    if (elem.contains('active')) {

        let complete = li.filter(list => list.classList.contains('completed') == true);
        complete.forEach(none);

        let active = li.filter(list => list.classList.contains('active') == true);
        left.innerText = active.length.toString();
        // adding color:-
        elem.add('clr');
        return active.forEach(block);


    }
    if (elem.contains('complete')) {
        let active = li.filter(list => list.classList.contains('active') == true);
        active.forEach(none);

        let complete = li.filter(list => list.classList.contains('completed') == true);
        // adding color:-
        elem.add('clr');
        left.innerText = complete.length.toString();
        return complete.forEach(block);
    }
    if (elem.contains('all')) {
        // adding color:-
        elem.add('clr');
        left.innerText = li.length.toString();
        return li.forEach(block);
    }
})

function none(list) {
    list.style.display = 'none';
}
function block(list) {
    list.style.display = 'flex';
}

let selected = localStorage.getItem('selected') || 'all';
Selected(selected);
function Selected(select) {
    if (select == 'all') {
        return all.click();
    }
    if (select == 'active') {
        return active.click();
    }
    if (select == 'complete') {
        return complete.click();
    }
}
// ----For Theme:-
const body = document.body;
const logo = document.querySelector('.logo');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

if (matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.add('sun');
}

logo.addEventListener('click', e => {
    let Elem = e.target;

    if (Elem.classList.contains('sun')) {

        Elem.classList.add('none');
        moon.classList.remove('none');
        moon.classList.add('block');
        return body.classList.contains('sun') ? body.classList.remove('sun') : body.classList.add('sun');
    }
    if (Elem.classList.contains('moon')) {

        Elem.classList.add('none');
        sun.classList.remove('none');
        sun.classList.add('block');
        return !body.classList.contains('sun') ? body.classList.add('sun') : body.classList.remove('sun');
    }

})