const barsIcon = document.querySelector('#bars-icon');
const sideBar = document.querySelector('#sidebar');
let sidevarVisible = false;

function sideBarShow(event){
    if (event && event.type === 'click') {
        sidevarVisible = !sidevarVisible;
    }
    var screenWidth = window.innerWidth;
    if(sidevarVisible){
        sideBar.style.display = 'block';
        sideBar.style.borderRadius = '20px 0px 20px 20px';
        barsIcon.style.borderRadius = '10px 10px 0px 0px';
        barsIcon.innerHTML = '<i id="cross-image" class="fa-solid fa-xmark"></i>';
    }
    else{
        sideBar.style.display = 'none';
        sideBar.style.borderRadius = '20px';
        barsIcon.style.borderRadius = '10px';
        barsIcon.innerHTML = '<i id="cross-image" class="fa-solid fa-bars"></i>';
    }

    if(screenWidth < 768)
        barsIcon.firstChild.style.fontSize = '15px';
    else if(screenWidth >= 768 && screenWidth < 1425)
        barsIcon.firstChild.style.fontSize = '25px';
    else
        sideBar.style.display = 'inline';
};

window.addEventListener('resize', sideBarShow);
barsIcon.addEventListener('click', sideBarShow);