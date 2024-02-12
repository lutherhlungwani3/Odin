let passwordField = document.querySelector('div.password input')
let ConfirmPasswordField = document.querySelector('div.confirm-password  input')
let message = document.querySelector('.password span')

// let allInputs = document.querySelectorAll('input')

let pass1;
let ConfPass;

function displayError() {
    message.style.display = 'block';
    passwordField.style.borderColor = 'red';
    ConfirmPasswordField.style.borderColor = 'red';
}

function preventError() {
    message.style.display = 'none';
    passwordField.style.borderColor = '#E5E7EB';
    ConfirmPasswordField.style.borderColor = '#E5E7EB';
}
passwordField.addEventListener('change', () => {
    pass1 = passwordField.value;
    ConfPass = ConfirmPasswordField.value;
    if (pass1 === ConfPass) {
        preventError()
    }
    else {

        displayError();
    }
})

ConfirmPasswordField.addEventListener('change', () => {
    ConfPass = ConfirmPasswordField.value;
    if (pass1 === ConfPass) {
        preventError()
    }
    else {
        displayError()
    }
})