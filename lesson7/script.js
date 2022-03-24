//Задача №1 (Написать функцию, возвращает true если символ найден в строке и false если нет.)
console.info("Задача №1");
function isSymbolPresentInString(datastring, symbol) {
 if (typeof datastring === "string" && datastring !== null) {
    for (let i = 0; i < datastring.length; i++) {
      if (datastring.charAt(i) === symbol) return true;
    }
 }
  return false;
}
const symbol = "c";
const datastring = "acergf";
console.log(isSymbolPresentInString(datastring, symbol));
