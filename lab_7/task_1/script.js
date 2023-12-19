document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#input");
    const button = document.querySelector('#button');
    button.addEventListener("click", function(){
        console.log(input.value);
        input.value='';
    });
});
