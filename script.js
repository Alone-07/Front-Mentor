const body = document.body;
const theme = document.querySelectorAll('[data-theme]');
const toggle = document.querySelector('.toggle');

Local();
theme.forEach(btn => [
    btn.addEventListener('click', () => {
        let data = btn.dataset.theme;
        if (data == 'theme-1') {
            // body.classList.add(`${data}`);
            toggle.style.justifyContent = 'flex-start';
            body.classList.remove('theme-2');
            body.classList.remove('theme-3');
            return localStorage.setItem('theme', 'theme-1');
        };
        if (data == 'theme-2') {
            toggle.style.justifyContent = 'center';
            body.classList.add(`${data}`)
            console.log(`${data} activated`);
            localStorage.setItem('theme', 'theme-2');
            return body.classList.remove('theme-3');
        };
        if (data == 'theme-3') {
            toggle.style.justifyContent = 'flex-end';
            body.classList.add(`${data}`);
            console.log(`${data} activated`);
            localStorage.setItem('theme', 'theme-3');
            return body.classList.remove('theme-2');
        }
    })
])

function Local() {
    let appliedTheme = localStorage.getItem('theme');

    if (appliedTheme == 'theme-1') {
        // body.classList.add(`${data}`);
        toggle.style.justifyContent = 'flex-start';
        body.classList.remove('theme-2');
        body.classList.remove('theme-3');
        return console.log('theme-1 already activated')
    };
    if (appliedTheme == 'theme-2') {
        toggle.style.justifyContent = 'center';
        body.classList.add(`theme-2`)
        console.log(`theme-2 already activated`);
        return body.classList.remove('theme-3');
    }
    if (appliedTheme == 'theme-3') {
        toggle.style.justifyContent = 'flex-end';
        body.classList.add(`theme-3`);
        console.log(`theme-3 already activated`);
        return body.classList.remove('theme-2');
    }
}

function Calculator() {
    let numbers = document.querySelectorAll('[data-numbers]');
    let del = document.querySelector('.delete');
    let reset = document.querySelector('.reset');
    let equal = document.querySelector('.equal');
    let operation = document.querySelectorAll('[data-operation]');
    let screenText = document.querySelector('.screen_text');
    let oper;

    // reset button
    reset.addEventListener('click', _ => {
        screenText.innerText = '';
    })

    // delete button
    del.addEventListener('click', _ => {
        screenText.innerText = String(screenText.innerText).slice(0, -1);
    })

    numbers.forEach(button => {
        button.addEventListener('click', _ => {
            if ((screenText.innerText).includes('.') && button.innerText == '.') return;
            screenText.innerText += String(button.innerText);
        })
    })
    operation.forEach(button => {
        button.addEventListener('click', _ => {
            let operand = button.dataset.operation;
            let arr = ['+', '-', '*', '/'];
            // MUST WORK NOT FINISHED YET
            // if (String(screenText.innerText).includes(operand)) return console.log('dont duplicate') // TO CHECK ANOTHER REPLICATION
            for (let sus of arr) {
                if (String(screenText.innerText).includes(sus)) { compute() };
            }
            screenText.innerText += String(operand);
            oper = String(operand);
            // console.log(search)
        })
    })

    equal.addEventListener('click', compute);

    function compute() {
        let arr = String(screenText.innerText).split('');
        let match = String(screenText.innerText).search(/[+*-/]/g);
        let before = String(screenText.innerText).slice(0, match);
        console.log('before ' + before);
        let beforeNum = parseFloat(before);
        let after = String(screenText.innerText).slice(match + 1);
        console.log('after ' + after);
        let afterNum = parseFloat(after);
        let total;

        if (match == false) return console.log('failed');
        if (before == '' || after == '') return;
        switch (oper) {
            case '+': {
                total = (beforeNum + afterNum);
            }
                break;
            case '-': {
                total = (beforeNum - afterNum);
            }
                break;
            case '*': {
                total = (beforeNum * afterNum);
            }
                break;
            case '/': {
                total = (beforeNum / afterNum);
            }
                break;
            default: console.log('nothing');
        }

        return screenText.innerText = total;
    }

}

Calculator();