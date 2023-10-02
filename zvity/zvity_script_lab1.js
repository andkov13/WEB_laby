document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("output");
    var displayedImage = document.getElementById("displayedImage");
    var button_lab1 = document.getElementById("lab1");
    var button_lab2 = document.getElementById("lab2");
    var button1 = document.getElementById("button_1");
    var button2 = document.getElementById("button_2");
    var button3 = document.getElementById("button_3");
    var button4 = document.getElementById("button_4");
    var button5 = document.getElementById("button_5");
    var button6 = document.getElementById("button_6");
    var button7 = document.getElementById("button_7");
    var button8 = document.getElementById("button_8");

    button_lab1.addEventListener("click", function() {
        lab1EventList();
        button1.innerText = "Опис предметного середовища";
        button2.innerText = "Тема, мета";
        button3.innerText = "Структура документа";
        button4.innerText = "html-код таблиць";
        button5.innerText = "html-код форми";
        button6.innerText = "html-код зображення";
        button7.innerText = "Висновок";
        button8.innerText = "";
    });

    button_lab2.addEventListener("click", function() {
        lab2EventList();
        button1.innerText = "Тема, мета";
        button2.innerText = "Способи підключення стилів";
        button3.innerText = "Селектори тегу";
        button4.innerText = "Селектори класу";
        button5.innerText = "Селектори ідентифікаторів";
        button6.innerText = "Інші селектори";
        button7.innerText = "СSS: Шрифти, Контури, Фон, Колір тексту";
        button8.innerText = "Висновок";
    });

    function lab1EventList(){
        button1.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image1.png";
        });
    
        button2.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image2.png";
        });
    
        button3.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image3.png";
        });
    
        button4.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image4.png";
        });
    
        button5.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image5.png";
        });
    
        button6.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image6.png";
        });
    
        button7.addEventListener("click", function() {
            displayedImage.src = "images/lab_1/lab1_image7.png";
        });
    }

    function lab2EventList(){
        button1.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_16.png";
        });
    
        button2.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_20.jpg";
        });
    
        button3.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_21.jpg";
        });
    
        button4.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_22.jpg";
        });
    
        button5.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_23.jpg";
        });
    
        button6.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_25.jpg";
        });
    
        button7.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_24.jpg";
        });

        button8.addEventListener("click", function() {
            displayedImage.src = "images/lab_2/img_26.png";
        });
    }
       
        


});
