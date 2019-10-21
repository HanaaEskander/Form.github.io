function errorMessage(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
   
    let name = document.myForm.name.value;
    let email = document.myForm.email.value;
    let mobile = document.myForm.mobile.value;
    let age = document.myForm.age.value;  
    let message = document.myForm.message.value;

    let nameErr = emailErr = mobileErr = ageErr = messErr = true;

   
    if(name == "") {
        errorMessage("nameErr", "Please enter your name");
        document.forms["myForm"]["name"].style.background = 'red';
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            errorMessage("nameErr", "Please enter a valid name");
            document.forms["myForm"]["name"].style.background = 'red';
        } else {
            errorMessage("nameErr", "");
            nameErr = false;
        }
    }

  
    if(email == "") {
        errorMessage("emailErr", "Please enter your email address");
        document.forms["myForm"]["email"].style.background = 'red';
    } else {
        
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            errorMessage("emailErr", "Please enter a valid email address");
            document.forms["myForm"]["email"].style.background = 'red';
        } else{
            errorMessage("emailErr", "");
            emailErr = false;
        }
    }

    if(mobile == "") {
        errorMessage("mobileErr", "Please enter your mobile number");
        document.forms["myForm"]["mobile"].style.background = 'red';
    } else {
        let regex = /^\s*(?:\+?(\d{3}))?[ ]*(\d{9})\s*$/;

        if(regex.test(mobile) === false) {
            errorMessage("mobileErr", "Please enter a valid mobile number");
            document.forms["myForm"]["mobile"].style.background = 'red';
        } else{
            errorMessage("mobileErr", "");
            mobileErr = false;
        }
    }
    if(age == "") {
        errorMessage("ageErr", "Please enter your age");
        document.forms["myForm"]["age"].style.background = 'red';
    } else {
        let regex = /^\d{2}$/;
        if(regex.test(age) === false ) {
            errorMessage("ageErr", "Enter Your Damn Age");
            document.forms["myForm"]["age"].style.background = 'red';
        } else{
            errorMessage("ageErr", "");
            ageErr = false;
        }
    }
    if(message == "") {
        errorMessage("messErr", "Please write a message");
        document.forms["myForm"]["message"].style.background = 'red';
    } else {
        let regex = /^[a-zA-Z]{200,299}$/;
        if( regex.test(message) === false ) {
            errorMessage("messErr", "Hey Dummy write a stupid short message");
            document.forms["myForm"]["message"].style.background = 'red';

        } else{
            errorMessage("messErr", "");
            ageErr = false;
        }
    }
    if((nameErr || emailErr || mobileErr || ageErr || messErr) == true) {
       return false;
    }
}  