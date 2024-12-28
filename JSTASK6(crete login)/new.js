document.addEventListener("DOMContentLoaded", function () {
    const registerF = document.getElementById("registerForm");
    const sName = document.getElementById("studentName");
    const emailInput = document.getElementById("email");
    const newPasswordInput = document.getElementById("p1");
    const confirmPasswordInput = document.getElementById("p2");

    const nameErrorMessage = document.getElementById("n1");
    const emailErrorMessage = document.getElementById("emailError");
    const passwordMismatchMessage = document.getElementById("g1");
    const passwordMatchMessage = document.getElementById("g2");
    const passwordErrorMessage = document.getElementById("passwordError");

    const togglePassword1 = document.getElementById('toggleP1');
    const togglePassword2 = document.getElementById('toggleP2');

    togglePassword1.addEventListener('click', function () {
        const type = newPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        newPasswordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });

    togglePassword2.addEventListener('click', function () {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isNumeric(str) {
        return /^\d+$/.test(str);
    }

    sName.addEventListener("focusout", function () {
        if (sName.value.trim() === "") {
            sName.style.border = "2px solid red";
            nameErrorMessage.style.display = "block";
        } else {
            sName.style.border = "";
            nameErrorMessage.style.display = "none";
        }
    });

    emailInput.addEventListener("focusout", function () {
        const emailValue = emailInput.value.trim();
        if (emailValue === "" || !validateEmail(emailValue)) {
            emailInput.style.border = "2px solid red";
            emailErrorMessage.style.display = "block";
        } else {
            emailInput.style.border = "";
            emailErrorMessage.style.display = "none";
        }
    });

    newPasswordInput.addEventListener("input", function () {
        if (!isNumeric(newPasswordInput.value)) {
            newPasswordInput.style.border = "2px solid red";
            passwordErrorMessage.style.display = "block";
        } else {
            newPasswordInput.style.border = "";
            passwordErrorMessage.style.display = "none";
        }
    });

    confirmPasswordInput.addEventListener("focusout", function () {
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            passwordMismatchMessage.style.display = "block";
            passwordMatchMessage.style.display = "none";
            confirmPasswordInput.style.border = "2px solid red";
        } else {
            passwordMatchMessage.style.display = "block";
            passwordMismatchMessage.style.display = "none";
            confirmPasswordInput.style.border = "";
        }
    });

    registerF.addEventListener("submit", function (event) {
        let valid = true;

        if (sName.value.trim() === "") {
            sName.style.border = "2px solid red";
            nameErrorMessage.style.display = "block";
            valid = false;
        }

        if (!validateEmail(emailInput.value.trim())) {
            emailInput.style.border = "2px solid red";
            emailErrorMessage.style.display = "block";
            valid = false;
        }

        if (!isNumeric(newPasswordInput.value)) {
            newPasswordInput.style.border = "2px solid red";
            passwordErrorMessage.style.display = "block";
            valid = false;
        }
        if (newPasswordInput.value !== confirmPasswordInput.value) {
            passwordMismatchMessage.style.display = "block";
            passwordMatchMessage.style.display = "none";
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
