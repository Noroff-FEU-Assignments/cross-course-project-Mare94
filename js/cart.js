const form = document.querySelector("#cartForm");
const fullName = document.querySelector("#fname");
const firstNameError = document.querySelector("#fullNameError");
const address = document.querySelector("#adr");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

// function to run thru and check if len matches or display error msg

function validateForm(event){
    event.preventDefault();

    if(checkLength(fullName.value, 0) === true){
        firstNameError.style.display = "none";
    } else{
        firstNameError.style.display = "block";
    }
    if(checkLength(city.value, 3) === true){
        cityError.style.display = "none";
    } else{
        cityError.style.display = "block";
    }
    if(checkLength(address.value, 5) === true){
        addressError.style.display = "none";
    } else{
        addressError.style.display = "block";
    }
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else{
        emailError.style.display = "block";
    }

    console.log("it works");
}

form.addEventListener("submit", validateForm);

// function to check the length of the passed in value

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } 
    else{
        return false;
    }
}

// function to validate if passed in value is email or not

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}