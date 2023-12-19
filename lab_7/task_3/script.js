document.addEventListener("DOMContentLoaded", function () {
    const div = document.querySelector('#place');
    let hit = false;
    
    div.addEventListener('click', () => {
        clicked(true);
        hit = true;
    });

    document.addEventListener('click', () => {
        if (hit === false) { clicked(false); }
        hit = false;
    });

    function clicked(state) { console.log(state); }
});
