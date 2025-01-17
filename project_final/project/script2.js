document.getElementById('switch-to-register').addEventListener('click', function(event) {
    event.preventDefault();
    const logform = document.getElementById('login-form');
    const regform = document.getElementById('register-form');
    logform.style.display = 'none';
    regform.reset();
    regform.style.display = 'block';
    document.getElementById('switch-to-register').style.display = 'none';
    document.getElementById('switch-to-login').style.display = 'block';
    document.getElementById('form-title').textContent = 'Register';
});

document.getElementById('switch-to-login').addEventListener('click', function(event) {
    event.preventDefault();
    const logform = document.getElementById('login-form');
    const regform = document.getElementById('register-form')
    logform.reset();
    logform.style.display = 'block';
    regform.style.display = 'none';
    document.getElementById('switch-to-register').style.display = 'block';
    document.getElementById('switch-to-login').style.display = 'none';
    document.getElementById('form-title').textContent = 'User Login';
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const nameInput = document.getElementById('name');
    const u_nameInput = document.getElementById('username');
    const m_numberInput = document.getElementById('mobile_num');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const u_nameError = document.getElementById('u_nameError')
    const m_numberError = document.getElementById('m_numberError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    nameInput.addEventListener('input', () => validateName());
    u_nameInput.addEventListener('input',()=> validateUsername());
    m_numberInput.addEventListener('input',()=> validateMobilenum());
    emailInput.addEventListener('input', () => validateEmail());
    passwordInput.addEventListener('input', () => validatePassword());
    confirmPasswordInput.addEventListener('input', () => validateConfirmPassword());

    form.addEventListener('submit', (event) => {
        let isValid = validateForm();
        if (!isValid) {
            alert("Registration Error");
            event.preventDefault();
            location.reload();

        }
    });

    function validateName() {
        const name = nameInput.value;
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            nameError.textContent = 'Name can only contain letters and spaces.';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }
    function validateUsername() {
        const username = u_nameInput.value;
        if (!/^[a-zA-Z0-9]+$/.test(username)) {
            u_nameError.textContent = 'Username can only contain letters and numbers..Spaces are not allowed!!!';
            return false;
        } else {
            u_nameError.textContent = '';
            return true;
        }
    }
    function validateMobilenum() {
        const num = m_numberInput.value;
        if (!/^\+94\d{9}$/.test(num)) {
            m_numberError.textContent = 'Invalid mobile number format.Check again !!!';
            return false;
        } else {
            m_numberError.textContent = '';
            return true;
        }

    }

    function validateEmail() {
        const email = emailInput.value;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            emailError.textContent = 'Invalid email format.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        const confirmPassword = confirmPasswordInput.value;
        const password = passwordInput.value;
        if (confirmPassword !== password) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return false;
        } else {
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    function validateForm() {
        let isValid = true;
        if (!validateName()) isValid = false;
        if (!validateUsername()) isValid = false;
        if(!validateMobilenum()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validatePassword()) isValid = false;
        if (!validateConfirmPassword()) isValid = false;
        return isValid;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const formData = new FormData(form);

        fetch('register.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text()) // You can also use response.json() if the response is JSON
            .then(data => {
                console.log('Success:', data);
                // Optionally update the UI with the response data
                alert('Form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
    });
});
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('login-form');
//
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting the traditional way
//
//         const formData = new FormData(form);
//         console.log(FormData);
//
//         fetch('login.php', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => response.text()) // You can also use response.json() if the response is JSON
//             .then(data => {
//                 console.log('Success:', data);
//                 // Optionally update the UI with the response data
//                 alert('loggin successfully!');
//                 window.location.href = 'index.html';
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 alert('An error occurred while submitting the form.');
//             });
//     });
// });

async function login(){
    document.getElementById('login-form').addEventListener('submit',() => {
        // Sample data to be sent as JSON
        const formData = new FormData(document.getElementById('login-form'));
        const data = {};

        // Populate the data object with form data
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data)

// Function to make a POST request with JSON body
        function postData(url, data) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Success:', JSON.parse(xhr.responseText));
                    } else {
                        console.error('Error:', xhr.statusText);
                    }
                }
            };

            xhr.send(JSON.stringify(data)); // Convert JavaScript object to JSON string
        }

// URL to which the request will be sent
        const url = 'login.php';
        postData(url,data);
    });
// Call the function
}

