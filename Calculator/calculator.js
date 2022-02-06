const screen = document.querySelector('.output_text')
const number = document.querySelectorAll('.numbers')
const operator = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const allclear = document.querySelector('.allClear')
const del = document.querySelector('.delete')

number.forEach((button) => {
    button.addEventListener('click', () => {
        if (screen.innerText.includes('.') && button.innerText === '.') return
        screen.innerText = screen.innerText.toString() + button.innerText.toString();
    })
})
allclear.addEventListener('click', () => {
    screen.innerText = '';
})
del.addEventListener('click', () => {
    screen.innerText = screen.innerText.slice(0, -1);
})
operator.forEach((button) => {
    button.addEventListener('click', () => {
        screen.innerText += button.innerText;
    })
})
equal.addEventListener('click', () => {
    let compute;
    // let screenNumbers = parseFloat(screen.innerText);
    // let screenInner = screen.innerText;
    let suspect = screen.innerText.includes('+');
    switch (screen.innerText) {
        case screen.innerText.includes('+') === true:
            let indexes = screen.innerText.search('+');
            let firstOperation = screen.innerText.slice[0, indexes];
            let lastOperation = screen.innerText.slice[(indexes + 1), screen.innerText.length];

            compute = parseFloat(firstOperation) + parse(lastOperation);
            console.log('worked 2')
            break;
        default:
            compute = 'nothing happened';
            console.log('not worked')
    }
    return screen.innerText = compute;
})