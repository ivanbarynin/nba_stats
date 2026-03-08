document.addEventListener("DOMContentLoaded", function(){

document.addEventListener("formValid", function(event){

const data = event.detail;

console.clear();

console.log("ФИО:", data.fullname);
console.log("Телефон:", data.phone);
console.log("Email:", data.email);
console.log("Сообщение:", data.message || "(не заполнено)");

const time = new Date().toLocaleString();

console.log("Время отправки:", time);

});

});