function validateForm() {

    // Перевірка цілого числа
    var integerField = document.getElementById("integer");
    var errorIntegerField = document.getElementById("error-integer");

    if(integerField.value==''){
        errorIntegerField.textContent = "Заповніть це поле";
        return false;
    } if (!/^[0-9]+$/.test(integerField.value)) {
        errorIntegerField.textContent = "Введіть коректне ціле число";
        return false;
    } else {
        errorIntegerField.textContent = "";
    }

    // Перевірка дійсного числа
    var floatField = document.getElementById("float");
    var errorFloatField = document.getElementById("error-float");

    if (!/^[0-9]+(\.[0-9]+)?$/.test(floatField.value) && floatField.value != '') {
        errorFloatField.textContent = "Введіть коректне дійсне число";
        return false;
    } else {
        errorFloatField.textContent = "";
    }

    // Перевірка дати
    var dateField = document.getElementById("date");
    var errorDateField = document.getElementById("error-date");

    if (!(dateField.value.match(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/)) && dateField.value != '') {
        errorDateField.textContent = "Введіть коректну дату у форматі DD.MM.YYYY";
        return false;
    } else {
        errorDateField.textContent = "";
    }

    // Перевірка паролів
    var passwordField = document.getElementById("password");
    var confirmPasswordField = document.getElementById("confirmPassword");
    var errorPasswordField = document.getElementById("error-password");
    var errorConfirmPasswordField = document.getElementById("error-confirmPassword");

    if(passwordField.value==''){
        errorPasswordField.textContent = "Заповніть це поле";
        return false;
    } else{
        errorPasswordField.textContent = "";
    }

    if(confirmPasswordField.value==''){
        errorConfirmPasswordField.textContent = "Заповніть це поле";
        return false;
    } else{
        errorPasswordField.textContent = "";
    }

    if (passwordField.value !== confirmPasswordField.value) {
        errorConfirmPasswordField.textContent = "Паролі не співпадають";
        return false;
    } else {
        errorConfirmPasswordField.textContent = "";
    }

    window.location.href = "post_form.html";
    // Якщо всі перевірки успішні, можна відправити форму
    return true;
}
