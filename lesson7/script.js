//Задача №1 (Написать функцию, возвращает true если символ найден в строке и false если нет.)
console.info("Задача №1");
function isSymbolPresentInString(dataString, symbol) {
  if (typeof dataString === "string" && dataString !== null) {
    for (let i = 0; i < dataString.length; i++) {
      if (dataString.charAt(i) === symbol) return true;
    }
  }
  return false;
}
const symbol = "c";
const dataString = "acergf";
console.log(isSymbolPresentInString(dataString, symbol));

//Задача №2 (Написать функцию, которая возвращает индекс первого найденного символа в строке, или -1 если символ не найден)
console.info("Задача №2");
function getSymbolIndex(paramString, anySymbol) {
  if (typeof paramString === "string" && paramString !== null) {
    for (let i = 0; i < paramString.length; i++) {
      if (paramString.charAt(i) === anySymbol) return i;
    }
  }
  return -1;
}
const anySymbol = "f";
const paramString = "acergf";
console.log("Индекс первого найденного символа", anySymbol, "равен", getSymbolIndex(paramString, anySymbol));

//Задача №3 (Написать функцию, которая получает количество четных цифр в числе)
console.info("Задача №3");
function getNumberOfEven(paramNumber) {
  paramNumber = paramNumber.toString();
  let count = 0;
  for (let i = 0; i < paramNumber.length; i++) if (paramNumber.charAt(i) % 2 === 0) count += 1;
  return count;
}
console.log("Количество четных цифр в числе = " + getNumberOfEven(34343434));

//Массивы
//Задача №1 "Реализация forEach"
console.info("Задача №1 <Реализация forEach>");
function myForEach(anyArr, funcCallBack) {
  for (let i = 0; i < anyArr.length; i++) {
    funcCallBack(anyArr[i], i, anyArr);
  }
}
function logArrayElements(element, index) {
  console.log("arr[" + index + "] = " + element);
};
const arr = [2, 5, 7, 9, 1, 3, 8, 11];
myForEach(arr, logArrayElements);

//Задача №2 "Реализация map"
console.info("Задача №2 <Реализация map>");
function myMap (anyArrMap, funcCallBackMap) {
  let newArray = [];
  for (let i = 0; i < anyArrMap.length; i++) {
    newArray.push(funcCallBackMap(anyArrMap[i], i, anyArrMap));
  }
  return newArray;
}
const arr2 = [7, 3, -5, 8, 11, 3, 0, 1, 4];
console.log("Новый массив с использованием мар:", myMap(arr2, (arr2) => arr2 * 4));

//Задача №3 "Реализация filter"
console.info("Задача №3 <Реализация filter>");