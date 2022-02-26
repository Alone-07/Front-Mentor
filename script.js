const body = document.body;
const theme = document.querySelectorAll('[data-theme]');
const toggle = document.querySelector('.toggle');

theme.forEach(btn => [
    btn.addEventListener('click', () => {
        let data = btn.dataset.theme;
        if (data == 'theme-1') {
            // body.classList.add(`${data}`);
            toggle.style.justifyContent = 'flex-start';
            body.classList.remove('theme-2');
            body.classList.remove('theme-3');
        };
        if (data == 'theme-2') {
            toggle.style.justifyContent = 'center';
            body.classList.add(`${data}`)
            console.log(`${data} activated`);
            return body.classList.remove('theme-3');
        };
        if (data == 'theme-3') {
            toggle.style.justifyContent = 'flex-end';
            body.classList.add(`${data}`);
            console.log(`${data} activated`);
            return body.classList.remove('theme-2');
        }
    })
])