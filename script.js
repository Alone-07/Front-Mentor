const text = document.querySelectorAll('[data-text]');
const submit = document.querySelector('[data-submit]');

function myForm() {

    for (let input of text) {
        let p = input.nextElementSibling;

        if (input.validity.valueMissing || !input.validity.valid || input.validity.patterMismatch) {
            p.innerText = input.title;
            input.classList.add('alert');
            p.style.display = 'block';

        }
        else {
            p.style.display = 'none';
            input.classList.remove('alert');
        }
    }


}

submit.addEventListener('click', myForm);
