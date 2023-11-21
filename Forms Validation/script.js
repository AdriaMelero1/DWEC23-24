const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//FUNCTIONS

function isMandatory(input) {
    if(input.value.trim( ) === ''){
        displayError(input, 'It\'s Mandatory')
    } else {
        displayCorrect(input);
    }
}

function checkLength(input, min, max) {
    if(input.value.length < min){
        displayError(input, 'Passwords must have at least ' + min + ' characters');    
    } else if(input.value.length > max){
        displayError(input, 'Passwords must have less than ' + max + ' characters');    
    } else {
        displayCorrect();
    }
}

function displayError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function displayCorrect(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control correct';
}

function takeInputName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// EVENT

form.addEventListener('submit', (e) => {
    e.preventDefault();

    isMandatory(username);
    isMandatory(email);
    isMandatory(password);
    isMandatory(password2);
    checkLength(username, 3, 15);
});