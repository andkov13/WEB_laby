
//відображеня актуальних дат

const currentDate = new Date();
let month;
let day;

const dates = document.querySelector('#dates');

currentDate.setDate(currentDate.getDate() - 3);
for(let i = -2; i <= 2; i++){
    currentDate.setDate(currentDate.getDate() + 1);
    day = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    dates.children[i + 2].textContent = `${day}.${month}`;
}

//підкреслення обраної дати

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#dates li');
    listItems[2].style.borderBottomColor = 'rgb(162,162,255)';
    listItems.forEach((item) => {
        item.addEventListener('click', function() {
            listItems.forEach((li) => {
                li.style.borderBottomColor = 'transparent';
            });
            this.style.borderBottomColor = 'rgb(162,162,255)';  
        });
    });
});

//бокова панель для мобільної та планшетної версій

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