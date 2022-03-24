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
console.log(getNumberOfEven(34343434));
