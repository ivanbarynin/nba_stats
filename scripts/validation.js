document.addEventListener("DOMContentLoaded", function () {

const form = document.getElementById("feedbackForm");

if (!form) return;

form.addEventListener("submit", function (event) {

event.preventDefault();

clearErrors();

let isValid = true;


/* ФИО */

const fullname = document.getElementById("fullname");
const fullnameValue = fullname.value.trim();

const words = fullnameValue.split(" ").filter(word => word.length > 0);

if (fullnameValue === "") {

showError(fullname, "Введите фамилию и имя");
isValid = false;

} else if (words.length < 2) {

showError(fullname, "Введите минимум два слова (Фамилия Имя)");
isValid = false;

}


/* Телефон */

const phone = document.getElementById("phone");
const phoneValue = phone.value.trim();

const phoneDigits = phoneValue.replace(/\D/g, "");

if (phoneValue === "") {

showError(phone, "Введите номер телефона");
isValid = false;

} else if (phoneDigits.length < 10) {

showError(phone, "Введите минимум 10 цифр");
isValid = false;

}


/* Email */

const email = document.getElementById("email");
const emailValue = email.value.trim();

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailValue === "") {

showError(email, "Введите email");
isValid = false;

} else if (!emailPattern.test(emailValue)) {

showError(email, "Введите корректный email");
isValid = false;

}


/* Agreement */

const agreement = document.getElementById("agreement");

if (!agreement.checked) {

alert("Необходимо согласие на обработку данных");
isValid = false;

}


/* Если форма валидна */

if (isValid) {

const formData = {

fullname: fullnameValue,
phone: phoneValue,
email: emailValue,
message: document.getElementById("message").value.trim()

};

const customEvent = new CustomEvent("formValid", {

detail: formData

});

document.dispatchEvent(customEvent);

alert("Форма успешно отправлена! Данные в консоли.");

form.reset();

}

});


/* Показ ошибки */

function showError(input, message) {

input.classList.add("border-red-500");

const error = document.createElement("p");

error.classList.add("text-red-500", "text-sm", "mt-1", "error-message");

error.textContent = message;

input.parentNode.appendChild(error);

}


/* Очистка ошибок */

function clearErrors() {

document.querySelectorAll(".error-message").forEach(el => el.remove());

document.querySelectorAll("input, textarea").forEach(el => {

el.classList.remove("border-red-500");

});

}


/* Убираем ошибку при вводе */

document.querySelectorAll("input, textarea").forEach(input => {

input.addEventListener("input", function () {

this.classList.remove("border-red-500");

const error = this.parentNode.querySelector(".error-message");

if (error) error.remove();

});

});

});