//===============SIGN IN FUNCTION

function signFormFieldChecker(input) {
    backInputFieldStyle(input);

    let inputValue = input.value;

    let alertMessage = document.createElement('Div');
    alertMessage.classList.add("alertMessage");
    let alertMessageText = "";
    let signUpFormPasswordInputField1 = document.getElementById("signUpFormPasswordInputField1");
    let signUpFormPasswordInputField2 = document.getElementById("signUpFormPasswordInputField2");
    let emailChekerCounter = 0;

    if (input.id === "signInFormEmailInputField" || input.id === "signUpFormEmailInputField" || input.id === "forgotPasswordFormEmailInputField") {
        inputValue.split('').forEach(el => 
        {
            if (el === "@"){
                emailChekerCounter += 1;
            }}); 

        if (inputValue.indexOf('@') === -1 && inputValue.length > 0){
            alertMessageText += "- email must contain @ character" + '<br>';
            errorInputField(input);
        }
        if (emailChekerCounter > 1) {
            alertMessageText += "- this field must contain only one @ character" + '<br>';
            errorInputField(input);
        }
    }
    if (inputValue.length === 0){
        alertMessageText += "- this field is empty" + '<br>';
        errorInputField(input);
    }
    if (inputValue.length < 5 && inputValue.length > 0){
        alertMessageText += "- this field must contain more than 5 characters" + '<br>';
        errorInputField(input);
    }
    if (inputValue.indexOf(' ') > -1){
        alertMessageText += "- this field shouldn't contain 'space'" + '<br>';
        errorInputField(input);
    }
    if (input.id === "firstNameInputField" || input.id === "lastNameInputField") {
        if (containsOnlySymbols(input.value) != true) {
            alertMessageText += "- this field shouldn't contain numbers or other symbols" + '<br>';
            errorInputField(input);
        }
    }
    if (signUpFormPasswordInputField1.value != signUpFormPasswordInputField2.value) {
        alertMessageText += "- passwords must be the same" + '<br>';
        errorInputField(signUpFormPasswordInputField1);
        errorInputField(signUpFormPasswordInputField2);
    }
    else if (signUpFormPasswordInputField1.value.length != 0 && signUpFormPasswordInputField2.value.length) {
        removeAlertMessage(signUpFormPasswordInputField1.parentNode);
        removeAlertMessage(signUpFormPasswordInputField2.parentNode);
        backInputFieldStyle(signUpFormPasswordInputField1);
        backInputFieldStyle(signUpFormPasswordInputField2);
    }

    if (alertMessageText.length != 0) {
        removeAlertMessage(input.parentNode);
        alertMessage.innerHTML = alertMessageText;
        input.parentNode.appendChild(alertMessage);
    }
    else{
        removeAlertMessage(input.parentNode);
        backInputFieldStyle(input);
    }
}

function signInButtonFunction() {
    let email = document.getElementById('signInFormEmailInputField');
    let password = document.getElementById('signInFormPasswordInputField');

    signFormFieldChecker(email);
    signFormFieldChecker(password);

    if (email.value.length != 0 && password.value.length != 0) {
        if (email.classList.value != "signFormErrorInputField" && password.classList.value != "signFormErrorInputField") {
            return login()
        }
    }
    console.log("incorrect password or email");
}