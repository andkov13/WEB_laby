document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#input");
    const button = document.querySelector('#show_password');
    button.addEventListener("click", function(){
        if(button.textContent === 'розкрити'){
            button.textContent = 'приховати';
            input.type = 'text';
        } 
        else{
            button.textContent = 'розкрити';
            input.type = 'password';
        }
    });
});
