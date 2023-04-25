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

    backInputFieldStyle();

    document.getElementsByName('emailInput')[0].value.split('').forEach(el => 
    {
        if (el === "@"){
            emailChekerCounter += 1;
        }}); 

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