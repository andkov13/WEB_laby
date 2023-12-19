document.addEventListener("DOMContentLoaded", function() {
    const createButton = document.querySelector('[data-create]');
    const destroyButton = document.querySelector('[data-destroy]');
    const divBoxes = document.querySelector('#boxes');

    createButton.addEventListener('click', function() {
        createBoxes(document.querySelector('input').value);
    });

    destroyButton.addEventListener('click', function() {
        destroyBoxes();
    });

    function createBoxes(amount){
        divBoxes.innerHTML = '';
        for(let i = 0; i < amount; i++){
            const newBox = document.createElement('div');
            const heightAndWidth = 30 + i * 10;
            newBox.style.height = heightAndWidth + 'px';
            newBox.style.width = heightAndWidth + 'px';
            newBox.style.backgroundColor = getRandomHexColor();
            divBoxes.appendChild(newBox);
        }
    }

    function destroyBoxes(){
        divBoxes.innerHTML = '';
    }

    function getRandomHexColor(){
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
});
