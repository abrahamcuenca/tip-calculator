let bill;
let people;
let percent = 0;
let total;

const billAmount= document.getElementById('billAmount');
const numberOfPeople = document.getElementById('numberOfPeople');
const customTipAmount = document.getElementById('customTipAmount');
const resetButton = document.getElementById('resetButton');
const tipButtons = document.querySelector('.tipButtons');
const tipTotal = document.getElementById('tipAmount');
const personTotal= document.getElementById('totalAmount');

const calcTip = () => {
    const billDivided = bill / people ;
    const tip = (billDivided * percent) / 100;
    const totalPerPerson = billDivided + tip;

    tipTotal.textContent = new Intl.
    NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
        .format(tip);

    personTotal.textContent = new Intl.
    NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
        .format(totalPerPerson)
}


const reset = () => {
    tipTotal.textContent = "";
    personTotal.textContent = "";
    billAmount.value = "";
    numberOfPeople.value = "";
    customTipAmount.value = ""
    bill = 0;
    people = 0;
    percent = 0;
    total = 0;
}

billAmount.onkeyup = (e) => {
    bill = e.target.value;
}

numberOfPeople.onblur = (e) => {
    people = e.target.value;
    personTotal.textContent = bill / people;
}

customTipAmount.onblur = (e) => {
    percent = e.target.value
    calcTip();
}

tipButtons.onclick = (e) => {
    percent = e.target.value;
    if (percent && bill && people) {
        calcTip();
    }
}

resetButton.onclick = () => {
    reset()
}
