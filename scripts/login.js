const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
    
    //login form validation
    document.addEventListener("DOMContentLoaded", function() {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const emailErrorElement = document.getElementById("email-error");
        const passwordErrorElement = document.getElementById("password-error");
        const registrationEmailInput = document.getElementById("reg-email");
        const registrationPasswordInput = document.getElementById("reg-password");
        const registrationConfirmPasswordInput = document.getElementById("reg-cpassword");
        const registrationErrorElement = document.getElementById("reg-email-error");
        const registrationPasswordErrorElement = document.getElementById("reg-password-error");

        const checkbox = document.getElementById("termCon");
        const checkboxErrorElement = document.getElementById("checkbox-error");
        const signupButton = document.getElementById("signupButton");

        function validateEmail(inputElement, errorElement) {
            const email = inputElement.value;
            if (!email.includes("@")) {
                errorElement.textContent = "Missing @ symbol.";
                return false;
            } else if (email.split("@")[1].indexOf(".") === -1) {
                errorElement.textContent = "Missing dot (.) in domain name.";
                return false;
            } else if (email.endsWith(".")) {
                errorElement.textContent = "Incomplete email address.";
                return false;
            }else {
                errorElement.textContent = "";
                return true;
            }
        }
        
        registrationEmailInput.addEventListener("input", function() {
            validateEmail(registrationEmailInput, registrationErrorElement);
        });

        emailInput.addEventListener("input", function() {
            validateEmail(emailInput, emailErrorElement);
        });

    
        function validatePassword(inputElement, errorElement) {
            const password = inputElement.value;
            
            if (password.length < 8) {
                errorElement.textContent = "Password should be a minimum of 8 characters.";
                return false;
            } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
                errorElement.textContent = "Password should contain at least one uppercase and one lowercase letter.";
                return false;
            } else if (!/\d/.test(password)) {
                errorElement.textContent = "Password should contain at least one number.";
                return false;
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                errorElement.textContent = "Password should contain at least one special character.";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }
        }
        
        passwordInput.addEventListener("input", function() {
            validatePassword(passwordInput, passwordErrorElement);
        });
        
        registrationPasswordInput.addEventListener("input", function() {
            validatePassword(registrationPasswordInput, registrationPasswordErrorElement);
        });
        
    
        document.querySelector(".form.login form").addEventListener("submit", function(event) {
            if (!validateEmail(emailInput.value, emailError) || !validatePassword(passwordInput.value, passwordError)) {
                event.preventDefault();
            }
        });
    
        document.querySelector(".form.signup form").addEventListener("submit", function(event) {
            if (!validateEmail(registrationEmailInput.value, registrationEmailError) || 
                !validatePassword(registrationPasswordInput.value, registrationPasswordError) || 
                registrationPasswordInput.value !== registrationConfirmPasswordInput.value) {
                event.preventDefault();
            }
        });
        signupButton.addEventListener("click", function(event) {
            if (!checkbox.checked) {
                checkboxErrorElement.textContent = "Please accept the terms and conditions.";
                // Prevent the form submission if the checkbox is not checked
                event.preventDefault();
            } else {
                // Clear the error message if the checkbox is checked
                checkboxErrorElement.textContent = "";
                // Proceed with the form submission logic here
            }
        });
    });
    
