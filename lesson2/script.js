// Задача №1
console.info ("Задача №1")
const firsName = prompt ("Как тебя зовут?");
let yearBirthday = prompt ("Какого ты года рождения?");
let age = 2022-yearBirthday;
alert (firsName + ',' + age);
console.log (firsName + ',' + age);
//Задача №2
console.info ("Задача №2")
let first = prompt ("Введите переменную 'a'");
let second = prompt ("Введите переменную 'b'");
let third = prompt ("Введите переменную 'c'");
let firstA = parseInt (first);
console.log (firstA, typeof firstA);
let secondB = parseInt (second);
console.log (secondB, typeof secondB);
let thirdC = parseInt (third);
console.log (thirdC, typeof thirdC);
let result = firstA + secondB + thirdC;
console.log (result);
let resultA = (firstA % 2 == 0) ? 'четное' : 'нечетное'
let resultB = (secondB % 2 == 0) ? 'четное' : 'нечетное'
let resultC = (thirdC % 2 == 0) ? 'четное' : 'нечетное'
console.log(resultA, resultB, resultC);
//Задача №3
console.info ("Задача №3")
let variableA = 5;
let variableB = 12;
let variableC = 17;
console.log ((variableA+variableB+variableC)/3);
//Задача №4
console.info ("Задача №4")
let numberInt = 12428;
let tensOfthousands = Math.trunc (numberInt/10000);
let thousands = Math.trunc (numberInt/1000 - tensOfthousands*10);
let hundreds = Math.trunc (numberInt/100 - tensOfthousands*100 - thousands*10);
let dozens = Math.trunc (numberInt/10 - tensOfthousands*1000 - thousands*100 - hundreds*10);
let units = Math.trunc (numberInt - tensOfthousands*10000 - thousands*1000 - hundreds*100 - dozens*10);
console.log (tensOfthousands, thousands, hundreds, dozens, units);

