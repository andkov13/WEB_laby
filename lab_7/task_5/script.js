document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login-form');
    const alert = document.querySelector('#alert');
    let userInfo = {};

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailValue = loginForm.querySelector('input[name="email"]').value;
        const passwordValue = loginForm.querySelector('input[name="password"]').value;

        alert.textContent = ''; 
        
        if(emailValue === '' || passwordValue === ''){
            alert.textContent = 'All form fields must be filled in';
        }

        else{
            loginForm.reset();
            userInfo = {
                email: emailValue.trim(),
                password: passwordValue.trim(),
            };
            console.log(userInfo);
        }
    });
});
