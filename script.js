
//Get all form elements from the HTML

const form = document.getElementById("registration-form")
const fullNameInput = document.getElementById("fullname-input")
const emailInput = document.getElementById("email-address-input");
const ageInput = document.getElementById("age-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-password-input");

//Create a validationRules object to hold all our rules

const validationRules = {

    fullName: {
        minWords: 2,
        errorMessage: "Full name must contain at least 2 words."
    },

    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Please enter a valid email address."
    },

    password: {
        minLength: 8,
        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
        errorMessage: "Password must be at least 8 characters, including one uppercase letter, one number, and one special character (!@#$%^&*)."
    },
    confirmPassword: {
        errorMessage: "Passwords do not match."
    },
    age: {
        minAge: 18,
        errorMessage: "You must be 18 or older to register."
    }
}
// Build individual validation functions

function validateFullName() {
    const fullNameValue = fullNameInput.value.trim();
    const words = fullNameValue.split(" ");

    if (fullNameValue === "" || words.length < validationRules.fullName.minWords) {
        return false;
    } else {
        return true;
    }
}

function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (!validationRules.email.pattern.test(emailValue)) {
        return false;
    } else {
        return true;
    }
}
function validatePassword() {
    const passwordValue = passwordInput.value;

    if (passwordValue.length < validationRules.password.minLength ||
        !validationRules.password.pattern.test(passwordValue)) {
        return false;
    } else {
        return true;
    }
}


function validateConfirmPassword() {
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    if (passwordValue !== confirmPasswordValue) {
        return false;
    } else {
        return true;
    }
}

function validateAge() {
    const ageValue = parseInt(ageInput.value);

    if (isNaN(ageValue) || ageValue < validationRules.age.minAge) {
        return false;
    } else {
        return true;
    }
}

//Display error messages on screen

function showError(errorSpanId, message) {
    const errorSpan = document.getElementById(errorSpanId);
    errorSpan.textContent = message;
}


//master function to call all individual functions together

function validateForm() {
    let isValid = true;

    if (!validateFullName()) {
        showError("fullName-error", validationRules.fullName.errorMessage);
        isValid = false;
    }

    if (!validateEmail()) {
        showError("email-error", validationRules.email.errorMessage);
        isValid = false;
    }

    if (!validatePassword()) {
        showError("password-error", validationRules.password.errorMessage);
        isValid = false;
    }

    if (!validateConfirmPassword()) {
        showError("confirmPassword-error", validationRules.confirmPassword.errorMessage);
        isValid = false;
    }

    if (!validateAge()) {
        showError("age-error", validationRules.age.errorMessage);
        isValid = false;
    }

    return isValid;
}
//attach submit event listener to form

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formIsValid = validateForm();

    if (formIsValid) {
        alert("🎉 Registration successful! Welcome aboard!");
        form.reset();
    } else {
        alert("❌ Please fix the errors in the form before submitting.");
    }
});

//real time validation listeners
fullNameInput.addEventListener("input", function() {
    if (!validateFullName()) {
        showError("fullName-error", validationRules.fullName.errorMessage);
    } else {
        showError("fullName-error", "");
    }
});
fullNameInput.addEventListener("blur", function() {
    if (!validateFullName()) {
        showError("fullName-error", validationRules.fullName.errorMessage);
    } else {
        showError("fullName-error", "");
    }
});

emailInput.addEventListener("input", function() {
    if (!validateEmail()) {
        showError("email-error", validationRules.email.errorMessage);
    } else {
        showError("email-error", "");
    }
});
emailInput.addEventListener("blur", function() {
    if (!validateEmail()) {
        showError("email-error", validationRules.email.errorMessage);
    } else {
        showError("email-error", "");
    }
});

passwordInput.addEventListener("input", function() {
    if (!validatePassword()) {
        showError("password-error", validationRules.password.errorMessage);
    } else {
        showError("password-error", "");
    }
});
passwordInput.addEventListener("blur", function() {
    if (!validatePassword()) {
        showError("password-error", validationRules.password.errorMessage);
    } else {
        showError("password-error", "");
    }
});

confirmPasswordInput.addEventListener("input", function() {
    if (!validateConfirmPassword()) {
        showError("confirmPassword-error", validationRules.confirmPassword.errorMessage);
    } else {
        showError("confirmPassword-error", "");
    }
});
confirmPasswordInput.addEventListener("blur", function() {
    if (!validateConfirmPassword()) {
        showError("confirmPassword-error", validationRules.confirmPassword.errorMessage);
    } else {
        showError("confirmPassword-error", "");
    }
});

ageInput.addEventListener("input", function() {
    if (!validateAge()) {
        showError("age-error", validationRules.age.errorMessage);
    } else {
        showError("age-error", "");
    }
});
ageInput.addEventListener("blur", function() {
    if (!validateAge()) {
        showError("age-error", validationRules.age.errorMessage);
    } else {
        showError("age-error", "");
    }
});

