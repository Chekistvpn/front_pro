//Задача №1
console.info("Задача №1. Cтрокa через запятую числа от 10 до 20");
let output = " ";
for (let i = 10; i <= 20; i++) {
  output += i + " ";
}
console.log(output);
//Задача №2
console.info("Задача №2. Kвадраты чисел от 10 до 20");
let squares = " ";
for (let i = 10; i <= 20; i++) {
  squares = squares + i ** 2 + " ";
}
console.log(squares);
//Задача №3
console.info("Задача №3. Таблица умножения на '7'");
let sevenTable = " ";
for (let i = 1; i <= 10; i++) {
  sevenTable += i * 7 + " ";
}
console.log(sevenTable);
//Задача №4
console.info("Задача №4.");
let sumIntegers = 0;
for (let i = 1; i <= 15; i++) {
  sumIntegers += i;
}
console.log("Cуммa целых чисел от 1 до 15 = ", sumIntegers);
//Задача №5
console.info("Задача №5.");
let prodIntegers = 15;
for (let i = 16; i <= 35; i++) {
  prodIntegers *= i;
  //console.log (prodIntegers);
}
console.log("Произведение целых чисел от 15 до 35 = ", prodIntegers);
//Задача №6
console.info("Задача №6.");
let arithmIntegers = 0;
for (let i = 1; i <= 500; i++) {
  arithmIntegers += i;
}
arithmIntegers /= 500;
console.log(
  "Cреднее арифметическое всех целых чисел от 1 до 500 = ",
  arithmIntegers
);
//Задача №7
console.info("Задача №7.");
let evenNumbers = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    evenNumbers += i;
    //console.log (evenNumbers);
  }
}
console.log(
  "Cуммa только четных чисел в диапазоне от 30 до 80 = ",
  evenNumbers
);
//Задача №8
console.info("Задача №8.");
let numberRange = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    numberRange += i + " ";
  }
}
console.log("Bсе числа в диапазоне от 100 до 200 кратные 3 = ", numberRange);
//Задача №9
console.info("Задача №9");
let naturalNumber = 1024;
let naturalNumber1 = " ";
let evenDivisors = 0;
let countOfEvenDivisors = 0;
for (let i = 1; i <= naturalNumber; i++) {
  if (naturalNumber % i === 0) {
    naturalNumber1 += i + " ";
    evenDivisors += i;
  }
  if (i % 2 === 0 && naturalNumber % i === 0) {
    countOfEvenDivisors += 1;
  }
}
console.log("Делители числа '", naturalNumber, "' = ", naturalNumber1);
console.log("Количество четных делителей числа '", naturalNumber, "'=", countOfEvenDivisors);
console.log("Cуммa четных делителей числа '", naturalNumber, "' = ", evenDivisors);
//Задача №10
console.info("Задача №10. Вывести таблицу умножения.");
let prodTable = "\n";
let prodTable1 = 1;
for (let i = 1; i <= 9; i++) {
  for (let k = 1; k <= 9; k++) {
    prodTable += i * k + " ";
  }
  prodTable += "\n";
}
console.log(prodTable);
//Задача №11
console.info("Задача №11. Игра “Угадай число”.");
let randomNumber = Math.floor(Math.random() * 11);
console.log (randomNumber);
alert("Попробуйте угадать число.");
while (true) {
  let hiddenNumber = prompt("Введите число от 0 до 10!");
  if (hiddenNumber === null) {
    break
  }
  //hiddenNumber = Number(hiddenNumber);
  if (isNaN(hiddenNumber)) {
    alert("Ошибка ввода!");
  } else if (hiddenNumber < randomNumber) {
    alert("Неверно! Загаданное число больше введеного Вами.");
  } else if (hiddenNumber > randomNumber) {
    alert("Неверно! Загаданное число меньше введеного Вами.");
  } else {
    alert("Поздравляем, угадал!");
    break;
      }
}
//Задача №12
console.info("Задача №12. Вывести треугольник построчно через console.log.");
let triangleApex = prompt("Введите величину вершины треугольника!");
triangleApex = Number(triangleApex);
for (let i = 0; i < triangleApex; i++) {
  console.log("  ".repeat(i) + "* ".repeat(triangleApex - i).trim());
}
