const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//FUNCTIONS

/* function isMandatory(input) {
    if(input.value.trim( ) === ''){
        displayError(input, 'It\'s Mandatory')
    } else {
        displayCorrect(input);
    }
} */

function isMandatory(inputArray) {

    inputArray.forEach((input) => {
        if(input.value.trim() === ''){
            displayError(input, `${takeInputName(input)} It s Mandatory`);
        } else {
            displayCorrect(input);
        }
    });
}

function checkLength(input, min, max) {
    if(input.value.length < min){
        displayError(input, `${takeInputName(input)} must have at least ${min} characters`);    
    } else if(input.value.length > max){
        displayError(input, `${takeInputName(input)} must have less than ${max} characters`);    
    } else {
        displayCorrect(input);
    }
}

function isEmailValid(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value.trim())){
        displayCorrect(input);
    } else {
        let message = takeInputName(input) + " format not valid";
        displayError(input, message);
    }
}

function checkPasswordsAreEqual(input1, input2){

    if(input1.value != input2.value){
        let message = takeInputName(input2) + " Must be equal to " + takeInputName(input1);
        displayError(input2, message)
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

    
    isMandatory([username, email, password, password2]);
    
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    
    isEmailValid(email);
    
    checkPasswordsAreEqual(password, password2);
});



