let bill;
let people;
let percent;
let total;

const billAmount= document.getElementById('billAmount');
const numberOfPeople = document.getElementById('numberOfPeople');
const customTipAmount = document.getElementById('customTipAmount');
const resetButton = document.getElementById('resetButton');
const tipButtons = document.querySelector('.tipButtons');
const tipTotal = document.getElementById('tipAmount');
const personTotal= document.getElementById('totalAmount');
const peopleErrorMessage = document.getElementById('peopleErrorMessage');
const billErrorMessage = document.getElementById('billErrorMessage');

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

const calcTip = () => {
    if (bill > 0 && people > 0 && percent > 0) {

        const billDivided = bill / people;
        const tip = (billDivided * percent) / 100;
        const totalPerPerson = billDivided + tip;

        tipTotal.textContent = formatCurrency(tip);
        personTotal.textContent = formatCurrency(totalPerPerson);
    }
}

const reset = () => {
    tipTotal.textContent = "$0.00";
    personTotal.textContent = "$0.00";

    billErrorMessage.classList.add('visually-hidden');
    peopleErrorMessage.classList.add('visually-hidden');
    billAmount.classList.remove('error')
    numberOfPeople.classList.remove('error')

    billAmount.value = "";
    numberOfPeople.value = null;
    customTipAmount.value = null;
    bill = null;
    people = null;
    percent = null;
    total = null;
}

const validator = (element) => {
    if(element.value === null || element.value === '' || Number(element.value) > 0) {
        element.parentElement.parentElement.childNodes[3].classList.add('visually-hidden');
        element.classList.remove('error');
    }
    else {
        element.classList.add('error');
        element.parentElement.parentElement.childNodes[3].classList.remove('visually-hidden');
    }
}

billAmount.onkeyup = (e) => {
    validator(e.target);
    bill = e.target.value || null;
}

numberOfPeople.onkeyup = (e) => {
    validator(e.target);
    people = e.target.value || null;

    if (bill > 0 && people > 0) {
        personTotal.textContent = formatCurrency((bill / people));
    }
}

customTipAmount.onkeyup = (e) => {
    percent = e.target.value
}

tipButtons.onclick = (e) => {
    percent = e.target.value;
    if (percent && bill && people ) {
        calcTip();
    }
}

resetButton.onclick = () => {
    reset()
}
