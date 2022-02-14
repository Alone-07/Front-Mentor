const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const tipBtn = document.querySelectorAll('.tip_btn');
const custom = document.querySelector('.custom');
const tipAmount = document.querySelector('.tip_amount');
const personAmount = document.querySelector('.perPerson');
const reset = document.querySelector('.reset');
const error = document.querySelector('.error');
const two = document.querySelector('.two');

tipBtn.forEach(button => {
    button.addEventListener('click', () => {
        reset.style.backgroundColor = 'rgba(38, 192, 171, 1)';
        if (Number(bill.value) == 0 || Number(people.value) == 0) {
            reset.style.backgroundColor = 'rgba(38, 192, 171, .2)';
            return
        }
        let buttonValue = Number(button.innerText.slice(0, -1));
        let tip = (Number(bill.value) * (buttonValue / 100)).toFixed(2); // single person tip
        let totalTip = (tip / Number(people.value)).toFixed(2); // per person tip

        let person = ((Number(tip) + Number(bill.value)) / Number(people.value)).toFixed(2); // total bill according to no.of.person including tip.

        // to display in output in HTML
        tipAmount.innerText = totalTip;
        personAmount.innerText = person;

        console.log('total Tip: ' + totalTip);
        console.log('total per person: ' + person);
    })
})
// custom
custom.addEventListener('input', () => {
    reset.style.backgroundColor = 'rgba(38, 192, 171, 1)';
    // stops the  fucnction if bill is 0
    if (Number(bill.value) == 0 || Number(people.value) == 0) {
        reset.style.backgroundColor = 'rgba(38, 192, 171, .2)';
        return
    }
    let customValue = Number(custom.value);
    let tip = (Number(bill.value) * (customValue / 100)).toFixed(2); // single person tip
    let totaltip = (Number(tip) / Number(people.value)).toFixed(2); // per person tip
    let person = ((Number(bill.value) + Number(tip)) / Number(people.value)).toFixed(2);

    tipAmount.innerText = totaltip;
    personAmount.innerText = person;
    console.log('tip: ' + totaltip + ', total: ' + person)
})
// people

people.addEventListener('input', () => {
    let peopleValue = Number(people.value);
    if (peopleValue == 0) {
        error.style.display = 'block';
        two.style.borderColor = 'orangered';
        tipAmount.innerText = '0.00';
        personAmount.innerText = '0.00';
        return
    }
    error.style.display = 'none';
    two.style.borderColor = 'transparent';
    let customValue = Number(custom.value);
    let tip = (Number(bill.value) * (customValue / 100)).toFixed(2); // single person tip
    let totaltip = (Number(tip) / Number(people.value)).toFixed(2); // per person tip
    let person = ((Number(bill.value) + Number(tip)) / Number(people.value)).toFixed(2);

    tipAmount.innerText = totaltip;
    personAmount.innerText = person;
    return console.log('done by people')
})
// reset
reset.addEventListener('click', () => {
    reset.style.backgroundColor = 'rgba(38, 192, 171, .2)';
    bill.value = '0';
    people.value = '1';
    custom.value = '';
    tipAmount.innerText = '0.00';
    personAmount.innerText = '0.00';
})

// bill
bill.addEventListener('input', () => {
    let billValue = Number(bill.value);
    if (billValue == 0) {
        tipAmount.innerText = '0.00';
        personAmount.innerText = '0.00';
    } else {

        let customValue = Number(custom.value);
        let tip = (Number(bill.value) * (customValue / 100)).toFixed(2); // single person tip
        let totaltip = (Number(tip) / Number(people.value)).toFixed(2); // per person tip
        let person = ((Number(bill.value) + Number(tip)) / Number(people.value)).toFixed(2);

        tipAmount.innerText = totaltip;
        personAmount.innerText = person;
    }
})