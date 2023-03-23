const customTip = document.getElementById('tipInput');
const defaultTip = document.getElementsByClassName('gridItem');
const payInput = document.getElementById('pay');
const people = document.getElementById('numberPeople');
const tipPerPerson = document.getElementById('tipForOne');
const pricePerPerson = document.getElementById('priceForOne');
const btn = document.getElementById('resetBtn');

let f = [1, 1, 1, 1];
let tipPerCent = 0, payment, timeout;
let selected = -1;

payInput.addEventListener('change', () => {
    if(payInput.value > 0) {
            payment = payInput.value;
            payInput.style.border = "solid hsl(172, 67%, 45%)";
    }
    else payInput.style.border = "solid rgb(207,149,140)";
})

for(let i = 0; i < defaultTip.length; ++i)
    defaultTip[i].addEventListener('click', () => {
        if(f[i] == 1 && selected == -1){
            defaultTip[i].style.backgroundColor = "hsl(172, 67%, 45%)";
            f[i] = 0;
            tipPerCent = parseInt(defaultTip[i].innerHTML);
            selected = i;
        }
        else if(f[i] == 1){
            for(let j = 0; j < defaultTip.length; ++j){
                defaultTip[j].style.backgroundColor = "hsl(183, 100%, 15%)";
                f[j] = 1;
                tipPerCent = 0;
            }
            defaultTip[i].style.backgroundColor = "hsl(172, 67%, 45%)";
            f[i] = 0;
            tipPerCent = parseInt(defaultTip[i].innerHTML);
            selected = i;
        }
        else if(f[i] == 0){
            defaultTip[i].style.backgroundColor = "hsl(183, 100%, 15%)";
            f[i] = 1;
            tipPerCent = 0;
            selected = -1;
        }
    })

function myFunction()
{
    timeout = setTimeout(alertTheUser(), 3000);
}

function alertTheUser()
{
    alert('Please select a tip');
}

customTip.addEventListener('change', () => {
    if(customTip.value <= 0) alert('Please select a greater tip!');
    else {
        tipPerCent = customTip.value;
        customTip.parentElement.style.border = "solid hsl(172, 67%, 45%)";
    }
})

people.addEventListener('change', () => {
    if(people.value <= 0 && tipPerCent == 0){
        document.getElementById('error').style.display = "block";
        people.style.border = "solid rgb(207,149,140)";
        myFunction();
    }
    else if(people.value <= 0){
        document.getElementById('error').style.display = "block";
        people.style.border = "solid rgb(207,149,140)";
    }
    else if(people.value > 0 && tipPerCent == 0){
        people.style.border = "solid hsl(172, 67%, 45%)";
        document.getElementById('error').style.display = "none";
        myFunction();
    }
    else {
        payment = payInput.value;
        tipPerPerson.innerText = '$' + ((tipPerCent / 100 * payment) / people.value).toFixed(2);
        pricePerPerson.innerText = '$' + (((tipPerCent / 100 * payment) / people.value) + payment / people.value).toFixed(2);
    }
})

btn.addEventListener('click', () => {
    location.reload();
})

    