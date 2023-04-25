//===============SIGN TYPE SWITCH FUNCTION

function signTypeSwitch(str){

    let signInForm = document.getElementById('signInForm');
    let signUpForm = document.getElementById('signUpForm');

    if (str.parentNode.id === "signInForm"){
        signInForm.style.display = "none";
        signUpForm.style.display = "flex";
    }
    if (str.parentNode.id === "signUpForm"){
        signInForm.style.display = "flex";
        signUpForm.style.display = "none";
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