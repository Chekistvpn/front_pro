//Задача №1
console.info("Задача №1");
const numA = 74;
const numB = 155;
if (numA > numB) {
    console.log(numA, "больше", numB);
} else {
    console.log(numA, "меньше", numB);
}
//Задача №2
console.info("Задача №2");
const numC = 85;
console.log(numC, (numC % 2 == 0) ? 'четное' : 'нечетное');
let lastDigit = numC % 10;
console.log("Последней цифрой числа", numC, "является", lastDigit);
//Задача №3
console.info("Задача №3");
let userName = prompt("Введите ваше имя");
if (userName === null) {
    alert("Вы не ввели имя!");
    userName = prompt("Введите ваше имя");
}
let age = prompt("Введите Ваш возраст");
age = Number(age);
//console.log(userName, typeof userName, age, typeof age);
if (age === null || Number.isNaN (age)) {
    alert("Вы не некоректно ввели возраст!");
    age = prompt("Введите Ваш возраст цифрами.")
}
let drinkAlc = confirm("Вы употребляете алкоголь?");
if (drinkAlc === false) {
    console.log (userName, "Так держать!");
} 
if (drinkAlc === true && age > 40) {
    console.log (userName, "Не злоупотребляйте.");
}
if (drinkAlc === true && age <= 40 && age > 18) {
    console.log (userName, "Только водку с пивом не мешайте...");
}
if (drinkAlc === true && age < 18) {
    console.log (userName, "Ты что?! Маме расскажу!");
}