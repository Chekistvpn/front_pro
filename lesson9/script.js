//Задача №1
console.info("Задача №1 - Функция при первом вызове запоминает параметр, при втором - суммирует переданный параметр с тем, что передали первый раз и т.д.");
function calcSum () {
  let count = 0;
  return function (number) {
    return (count += number);
  };
}
let sum = calcSum();
console.log("Sum(3) -> ф-ция возвращает результат " + sum(3));
console.log("Sum(5) -> ф-ция возвращает результат " + sum(5));
console.log("Sum(8) -> ф-ция возвращает результат " + sum(8));
console.log("Sum(1) -> ф-ция возвращает результат " + sum(1));
