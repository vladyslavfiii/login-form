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

    backInputFieldStyle();

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