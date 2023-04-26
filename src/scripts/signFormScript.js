//===============SIGN TYPE SWITCH FUNCTION

function signFormTypeSwitch(strValue){

    let str = strValue.parentNode;

console.log(str.parentNode);

    let signInForm = document.getElementById('signInForm');
    let signUpForm = document.getElementById('signUpForm');
    let forgotPasswordForm = document.getElementById('forgotPasswordForm');

    if (str.parentNode.id === "signInForm" && strValue.id != "signInForgotPasswordButton") {
        signInForm.style.display = "none";
        signUpForm.style.display = "flex";
        forgotPasswordForm.style.display = "none";
    }    
    if (str.parentNode.id === "signInForm" && strValue.id === "signInForgotPasswordButton") {
        signUpForm.style.display = "none";
        signInForm.style.display = "none";
        forgotPasswordForm.style.display = "flex";
    }
    if (str.parentNode.id === "forgotPasswordForm") {
        signInForm.style.display = "flex";
        signUpForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
    }
    if (str.parentNode.id === "signUpForm") {
        signInForm.style.display = "flex";
        signUpForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
    }
}

function removeAlertMessage(inputParentNode){
    if (inputParentNode.childElementCount >= 3) {
        inputParentNode.removeChild(inputParentNode.lastElementChild);
    }  
}

function login(){
    console.log("wow")
}

function containsOnlySymbols(str) {
    console.log(/^[A-Za-z]+$/.test(str));
    return /^[A-Za-z]+$/.test(str);
}

function errorInputField(str){
    str.classList.replace('signFormInputField', 'signFormErrorInputField');
}

function backInputFieldStyle(str){
        str.classList.replace('signFormErrorInputField', 'signFormInputField');
}