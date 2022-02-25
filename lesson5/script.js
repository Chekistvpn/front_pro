//Задача №1
console.info ("Задача №1");
function calcCircleArea (radius) {
    return 3.14 * radius ** 2;
}
const сircleArea = calcCircleArea (5);
console.log ("Площадь круга =", сircleArea, "см2");
//Задача №2
console.info ("Задача №2");
function calcCircumference (diameter) {
    return 3.14 * diameter;
}
const circumference = calcCircumference (3);
console.log ("Длина окружности =", circumference, "см");
//Задача №3
console.info ("Задача №3");
function calcAverage (numbA,nunbB) {
    return (numbA+nunbB)/2;
}
const average = calcAverage (4,8);
console.log ("Среднее арифмитическое двух чисел =", average);
//Задача №4
console.info ("Задача №4");
function calc (x,y, action) {
    if (action==="+") {
        return x+y;
    }
    if (action==="-") {
        return x-y;
    }
    if (action==="*") {
        return x*y;
    }
    if (action==="/") {
        return x/y;
    }
    if (action==="%") {
        return y*100/x;
    }
    if (action==="^") {
        return x**y;
    }
}
const calcXY = calc (8,4,"^");
console.log ("Значение функци calc =", calcXY);
