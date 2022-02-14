clearErrors = () => {
    var errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

setError = (id, error) => {
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;
}

checkPassword = (password) => {
    var hasUpper = false;
    var hasLower = false;
    var hasNumber = false;
    var hasSpecial = false;
    let specials = `/[\`¬¦£!@#$%^&*()_+-=[]{};':"\\|,.<>¬?~]/`;
    let returnValue = "";

    for (let i = 0; i < password.length; i++) {
        if (password[i] == " ") {
            return false;
        }
        if (specials.match(password[i])) {
            hasSpecial = true;
            console.log("special");
        } else if (password[i].toLowerCase() === password[i] && isNaN(parseInt(password[i])) == true) {
            hasLower = true
            console.log("lower");
        } else if (password[i].toUpperCase() === password[i] && isNaN(parseInt(password[i])) == true) {
            hasUpper = true;
            console.log("upper");
        } else if (!isNaN(parseInt(password[i]))) {
            hasNumber = true;
            console.log("num");
        }
    }


    
    if (hasNumber == false) {
        returnValue += " **password must contain at least one number";
    }
     if (hasLower == false) {
        returnValue += " **password must contain at least one lower-case letter";
    } 
    if (hasUpper == false) {
        returnValue += " **password must contain at least one upper-case letter";
    }
     if (hasSpecial == false) {
        returnValue+= " **password must contain at least one special character";
    }
    if (hasLower == true && hasUpper == true && hasNumber == true && hasSpecial == true) {
        console.log("true");
        return true;
    } else {
        return returnValue;
    }

}

validateForm = () => {
    var returnVal = true;
    clearErrors();
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var number = document.forms["form"]["number"].value;
    var password = document.forms["form"]["password"].value;
    var confirmpassword = document.forms["form"]["confirmpassword"].value;


    if (name.length < 5) {
        setError("name", "**Name is too short");
        returnVal = false;
    }

    if (name.length == 0) {
        setError("name", "**Length of name cannot be zero")
        returnVal = false;
    }
    if (email.length > 15) {
        setError("email", "**Email must not be longer than 15 characters");
        returnVal = false;
    }
    if (number.length !== 11) {
        setError("number", "**incorrect number of digits");
        returnVal = false;
    }



    if (checkPassword(password) !== true) {
        setError("password", `${checkPassword(password)}`)
    }

    if (password !== confirmpassword) {
        setError("confirmpassword", "**Passwords do not match");
    }


    return returnVal;
}