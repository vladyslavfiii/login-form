//===============SIGN IN FUNCTION

function signInFunction() {
    let alertMessage = document.createElement('Div');
    alertMessage.classList.add("alertMessage");
    let alertMessageText = "";

    let email = document.getElementsByName('emailInput')[0].value;
    let pass = document.getElementsByName('passwordInput')[0].value;

    let emailInputField = document.getElementsByName('emailInput')[0];
    let passwordInputField = document.getElementsByName('passwordInput')[0];

    let emailChekerCounter = 0;

    document.getElementsByName('emailInput')[0].value.split('').forEach(el => 
    {
        if (el === "@"){
            emailChekerCounter += 1;
        }}); 

    if (email.length === 0){
        alertMessageText += "> email field is empty" + '<br>';
        errorInputField(emailInputField);
        console.log('1');
    }
    if (email.length < 5 && email.length > 0){
        alertMessageText += "> email field must contain email adress" + '<br>';
        errorInputField(emailInputField);
        console.log('2');
    }
    if (email.indexOf('@') === -1 && email.length > 0){
        alertMessageText += "> email must contain @ character" + '<br>';
        errorInputField(emailInputField);
        console.log('3');
    }
    if (emailChekerCounter > 1) {
        alertMessageText += "> email must contain only one @ character" + '<br>';
        errorInputField(emailInputField);
        console.log('4');
    }
    if (email.indexOf(' ') > -1){
        alertMessageText += "> email shouldn't contain 'space'" + '<br>';
        errorInputField(emailInputField);
        console.log('5;')
    }
    if (pass.length === 0){
        alertMessageText += "> password field is empty" + '<br>';
        errorInputField(passwordInputField);
    }
    if (pass.length < 5 && pass.length > 0){
        alertMessageText += "> password must contain more than five character" + '<br>';
        errorInputField(passwordInputField);
    }
    if (pass.indexOf(' ') > -1){
        alertMessageText += "> password shouldn't contain 'space'" + '<br>';
        errorInputField(passwordInputField);
    }
    if (alertMessageText.length != 0)
    {
        removeAlertMessage();
        alertMessage.innerHTML = alertMessageText;
        document.getElementsByClassName('signInForm')[0].appendChild(alertMessage);
    }
    else{
        login();
    }
}

//===============SIGN UP FUNCTION

function signUpFunction(){
    let alertMessage = document.createElement('Div');
    alertMessage.classList.add("alertMessage");
    let alertMessageText = "";

    let fname = document.getElementsByName('firstNameInput')[0].value;
    let lname = document.getElementsByName('lastNameInput')[0].value;
    let email = document.getElementsByName('emailInput1')[0].value;
    let pass1 = document.getElementsByName('passwordInput1')[0].value;
    let pass2 = document.getElementsByName('passwordInput2')[0].value;

    let fnameInputField = document.getElementsByName('firstNameInput')[0];
    let lnameInputField = document.getElementsByName('lastNameInput')[0];
    let emailInputField = document.getElementsByName('emailInput1')[0];
    let pass1InputField = document.getElementsByName('passwordInput1')[0];
    let pass2InputField = document.getElementsByName('passwordInput2')[0];

    let emailChekerCounter = 0;

    document.getElementsByName('emailInput1')[0].value.split('').forEach(el => 
    {
        if (el === "@"){
            emailChekerCounter += 1;
        }
    }); 

    if (fname.length === 0){
        alertMessageText += "> first name field is empty" + '<br>';
        errorInputField(fnameInputField);
    }
    if (fname.length < 3 && fname.length > 0){
        alertMessageText += "> first name field must contain more than three character" + '<br>';
        errorInputField(fnameInputField);
    }
    if (fname.indexOf(' ') > -1){
        alertMessageText += "> first name field shouldn't contain 'space'" + '<br>';
        errorInputField(fnameInputField);
    }
    if (containsOnlySymbols(fname) === false){
        alertMessageText += "> first name field shouldn't contain numbers and '@', '!'..." + '<br>';
        errorInputField(fnameInputField);
    }
    if (lname.length === 0){
        alertMessageText += "> last name field is empty" + '<br>';
        errorInputField(lnameInputField);
    }
    if (lname.length < 3 && lname.length > 0){
        alertMessageText += "> last name field must contain more than three character" + '<br>';
        errorInputField(lnameInputField);
    }
    if (lname.indexOf(' ') > -1){
        alertMessageText += "> last name field shouldn't contain 'space'" + '<br>';
        errorInputField(lnameInputField);
    }
    if (containsOnlySymbols(lname) === false){
        alertMessageText += "> last name field shouldn't contain numbers and '@', '!'..." + '<br>';
        errorInputField(lnameInputField);
    }
    if (email.length === 0){
        alertMessageText += "> email field is empty" + '<br>';
        errorInputField(emailInputField);
    }
    if (email.length < 5 && email.length > 0){
        alertMessageText += "> email field must contain email adress" + '<br>';
        errorInputField(emailInputField);
    }
    if (email.indexOf('@') === -1 && email.length > 0){
        alertMessageText += "> email must contain @ character" + '<br>';
        errorInputField(emailInputField);
    }
    if (emailChekerCounter > 1) {
        alertMessageText += "> email must contain only one @ character" + '<br>';
        errorInputField(emailInputField);
    }
    if (email.indexOf(' ') > -1){
        alertMessageText += "> email shouldn't contain 'space'" + '<br>';
        errorInputField(emailInputField);
    }
    if (pass1.length === 0){
        alertMessageText += "> password field is empty" + '<br>';
        errorInputField(pass1InputField);
        errorInputField(pass2InputField);
    }
    if (pass1.length < 5 && pass1.length > 0){
        alertMessageText += "> password must contain more than five character" + '<br>';
        errorInputField(pass1InputField);
        errorInputField(pass2InputField);
    }
    if (pass1.indexOf(' ') > -1){
        alertMessageText += "> password shouldn't contain 'space'" + '<br>' + '<br>';
        errorInputField(pass1InputField);
        errorInputField(pass2InputField);
    }
    if (pass1 != pass2){
        alertMessageText += "> the password must be the same";
        errorInputField(pass1InputField);
        errorInputField(pass2InputField);
    }
    if (alertMessageText.length != 0)
    {
        removeAlertMessage();
        alertMessage.innerHTML = alertMessageText;
        document.getElementsByClassName('signUpForm')[0].appendChild(alertMessage);  
    }
}

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
    for (let i = 0; i < document.getElementsByClassName('signFormInputField').length; i++) {
        console.log(i);
        console.log(document.getElementsByClassName('signFormInputField')[i]);
        document.getElementsByClassName('signFormInputField')[i].classList.remove('signFormErrorInputField');
        document.getElementsByClassName('signFormInputField')[i].classList.add('signFormInputField'); 
    }
}