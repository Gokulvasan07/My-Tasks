const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
document.getElementById('registerForm').addEventListener('submit', function(e) {
    const age = document.querySelector('input[placeholder="Age"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;

    if (age < 1 || age > 100) {
        alert('Please enter a valid age between 1 and 100.');
        e.preventDefault();
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        e.preventDefault();
    }
});
