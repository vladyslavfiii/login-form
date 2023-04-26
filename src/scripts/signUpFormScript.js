//===============SIGN UP FUNCTION

    let fname = document.getElementById('firstNameInputField');
    let lname = document.getElementById('lastNameInputField');
    let email = document.getElementById('signUpFormEmailInputField');
    let pass1 = document.getElementById('signUpFormPasswordInputField1');
    let pass2 = document.getElementById('signUpFormPasswordInputField2');
    let error = "signFormErrorInputField";

function signUpButtonFunction(){

    if (fname.value.length != 0 && lname.value.length != 0 && email.value.length != 0 && pass1.value.length != 0 && pass2.value.length != 0) {
        if (fname.classList.value != error && lname.classList.value != error && email.classList.value != error && pass1.classList.value != error && pass2.classList.value != error) {
            return signUpFunction()
        }
    }
    else{
        console.log("incorrect input information");
    }
}

function signUpFunction(){

    const customer = {

        firstName: fname.value,
        lastName: lname.value,
        emailAddress: email.value,
        password: pass1.value
    };

     const customerAccount = Object.create(customer);

     console.log(customerAccount)
}