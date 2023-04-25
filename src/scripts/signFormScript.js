//===============SIGN TYPE SWITCH FUNCTION

let signCounter = 1;

function signTypeSwitch(){
    let signInForm = document.getElementsByClassName('signInForm')[0];
    let signUpForm = document.getElementsByClassName('signUpForm')[0];

    let signCounterDisplay = signCounter % 2;

    if (signCounterDisplay === 1){
        signInForm.style.display = "none";
        signUpForm.style.display = "flex";
        signCounter += 1;
    }
    if (signCounterDisplay === 0){
        signInForm.style.display = "flex";
        signUpForm.style.display = "none";
        signCounter += 1;
    }
    removeAlertMessage();
    backInputFieldStyle();
}

function removeAlertMessage(){
    let signInForm = document.getElementsByClassName('signInForm')[0];
    let signUpForm = document.getElementsByClassName('signUpForm')[0];
    let alertMessage = document.getElementsByClassName('alertMessage')[0];

    for (let i = 0; i < signInForm.children.length; i++){
        if (signInForm.children[i] === alertMessage){
            signInForm.removeChild(signInForm.children[i]);
        }
    }

    for (let k = 0; k < signUpForm.children.length; k++){
        if (signUpForm.children[k] === alertMessage){
            signUpForm.removeChild(signUpForm.children[k]);
        }
    }
}

function login(){
    removeAlertMessage();
    console.log("wow")
    /* document.getElementsByClassName('sign')[0].style.display = "none";
    document.getElementsByClassName('comments')[0].style.display = "flex";
    document.getElementsByClassName('customerName')[0].innerHTML = document.getElementsByName('emailInput')[0].value;
    document.getElementsByName('emailInput')[0].value = "";
    document.getElementsByName('passwordInput')[0].value = "";
    */
}

function containsOnlySymbols(str) {
    return /^[A-Za-z]+$/.test(str);
}

function errorInputField(str){
    str.classList.replace('signFormInputField', 'signFormErrorInputField');
}

function backInputFieldStyle(){
    for (let i = 0; i < document.getElementsByClassName('signFormErrorInputField').length; i++) {
        document.getElementsByClassName('signFormErrorInputField')[i].classList.replace('signFormErrorInputField', 'signFormInputField');
    }
}