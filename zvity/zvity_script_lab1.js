document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("output");
    var displayedImage = document.getElementById("displayedImage");

    var button_lab1 = document.getElementById("lab1");
    var button_lab2 = document.getElementById("lab2");
    var button_lab3 = document.getElementById("lab3");
    var button_lab4 = document.getElementById("lab4");
    var button_lab5 = document.getElementById("lab5");

    var button1 = document.getElementById("button_1");
    var button2 = document.getElementById("button_2");
    var button3 = document.getElementById("button_3");
    var button4 = document.getElementById("button_4");
    var button5 = document.getElementById("button_5");
    var button6 = document.getElementById("button_6");
    var button7 = document.getElementById("button_7");
    var button8 = document.getElementById("button_8");
    var button9 = document.getElementById("button_9");
    var button10 = document.getElementById("button_10");
    var button11 = document.getElementById("button_11");
    var button12 = document.getElementById("button_12");

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
        button9.innerText = "";
        button10.innerText = "";
        button11.innerText = "";
        button12.innerText = "";
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
        button9.innerText = "";
        button10.innerText = "";
        button11.innerText = "";
        button12.innerText = "";
    });

    button_lab3.addEventListener("click", function() {
        lab3EventList();
        button1.innerText = "Тема, мета";
        button2.innerText = "Завдвння №1: зовнішній вигляд макету, код макету";
        button3.innerText = "Завдання №2";
        button4.innerText = "Фіксована таблична верстка";
        button5.innerText = "Гумова таблична верстка";
        button6.innerText = "Фіксована блокова верстка";
        button7.innerText = "Гумова блокова верстка";
        button8.innerText = "Завдання №3: Flexbox";
        button9.innerText = "Скріншот сторінки (Flexbox)";
        button10.innerText = "html-код (Flexbox)";
        button11.innerText = "css-код (Flexbox)";
        button12.innerText = "Висновок";
    });

    button_lab4.addEventListener("click", function() {
        lab4EventList();
        button1.innerText = "Тема, мета";
        button2.innerText = "Мобільна версія";
        button3.innerText = "Планшетна версія";
        button4.innerText = "Десктоп версія";
        button5.innerText = "Висновок";
        button6.innerText = "";
        button7.innerText = "";
        button8.innerText = "";
        button9.innerText = "";
        button10.innerText = "";
        button11.innerText = "";
        button12.innerText = "";
    });

    button_lab5.addEventListener("click", function() {
        lab5EventList();
        button1.innerText = "Тема, мета";
        button2.innerText = "Способи функціонального застосування JS";
        button3.innerText = "Завдання №1: результат";
        button4.innerText = "Завдання №1: код";
        button5.innerText = "Завдання №2: результат";
        button6.innerText = "Завдання №2: код";
        button7.innerText = "Завдання №3";
        button8.innerText = "Висновок";
        button9.innerText = "";
        button10.innerText = "";
        button11.innerText = "";
        button12.innerText = "";
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

    function lab3EventList(){
        button1.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_0.png";
        });
    
        button2.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_4.jpg";
        });
    
        button3.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_5.jpg";
        });
    
        button4.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_6.jpg";
        });
    
        button5.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_7.jpg";
        });
    
        button6.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_8.jpg";
        });
    
        button7.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_10.jpg";
        });

        button8.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_15.png";
        });

        button9.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_14.jpg";
        });

        button10.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_12.png";
        });

        button11.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_13.png";
        });

        button12.addEventListener("click", function() {
            displayedImage.src = "images/lab_3/img_16.png";
        });
    }
       
    function lab4EventList(){
        button1.addEventListener("click", function() {
            displayedImage.src = "images/lab_4/img_0.png";
        });
    
        button2.addEventListener("click", function() {
            displayedImage.src = "images/lab_4/img_1.jpg";
        });
    
        button3.addEventListener("click", function() {
            displayedImage.src = "images/lab_4/img_2.jpg";
        });
    
        button4.addEventListener("click", function() {
            displayedImage.src = "images/lab_4/img_3.jpg";
        });
    
        button5.addEventListener("click", function() {
            displayedImage.src = "images/lab_4/img_7.png";
        });
    }

    function lab5EventList(){
        button1.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_0.png";
        });
    
        button2.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_1.png";
        });
    
        button3.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_3.png";
        });
    
        button4.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_2.png";
        });
    
        button5.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_5.png";
        });

        button6.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_4.jpg";
        });

        button7.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_6.jpg";
        });

        button8.addEventListener("click", function() {
            displayedImage.src = "images/lab_5/img_7.png";
        });
    }
       
});
