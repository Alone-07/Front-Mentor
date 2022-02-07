
const button = document.querySelector('[type = submit]');
const alertMessage = document.querySelector('.alert-message');
const alerts = document.querySelector('.alert');
const forms = document.querySelector('.email');
const thank = document.querySelector('.thank');
// const inputValue = document.querySelector('input');
button.addEventListener('click', () => {

    const inputs = document.querySelector('input').value;
    let inputString = inputs.toString().toLowerCase().trim();
    if (inputString.includes('@') != true) {
        alertMessage.style.display = 'block';
        alerts.style.display = 'block';
        return false;
    }
    if (inputString.includes(' ') == true) {
        alertMessage.style.display = 'block';
        alerts.style.display = 'block';
        return false;
    }
    if (inputString == '') {
        alertMessage.style.display = 'block';
        alerts.style.display = 'block';
        return false;
    }
    alertMessage.style.display = 'none';
    alerts.style.display = 'none';
    thank.style.opacity = 1;
    inputValue = '';
    return true;

})
