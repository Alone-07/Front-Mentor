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