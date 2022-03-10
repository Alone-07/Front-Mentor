import hi from './modules';
class password {
    constructor(screen, length) {
        this.screen = screen;
        this.length = length;
    }

    pass() {
        let words = 'abcdefghijklmnopqrstuvwxyz@$&*#~!^+-.1234567890';
        let wordsArray = Array.from(words);

        for (let x in wordsArray) {
            let rand = Math.floor(Math.random() * x);
            let value = wordsArray[x];
            wordsArray[x] = wordsArray[rand];
            wordsArray[rand] = value;
        }

        let sliced = wordsArray.slice(0, (this.length));
        let actualPassword = '';
        for (let x of sliced) {
            actualPassword += x;
        }
        this.screen.innerText = `Your password:- ${String(actualPassword)}`;
    }
};
const out = document.querySelector('[data-output]');
const btn = document.querySelector('[data-btn]');
let customer = new password(out, 12);

// customer.pass();
btn.addEventListener('click', _ => {
    customer.pass();
});

class old {
    constructor(name, year) {
        this.year = year;
        this.name = name;
    }

    hoay() {
        let date = new Date();
        let currentYear = date.getFullYear();

        console.log(`${this.name} Your age is:- ${(currentYear) - (this.year)}`)
    }
}
const boy = new old('krish', 2002);
boy.hoay();
