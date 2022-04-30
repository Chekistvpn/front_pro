console.info("Задача №1, функция глубокого копирования объекта");
function greatCopyObject(sedan) {
  let copyObj = Array.isArray(sedan) ? [] : {};
  for (let key in sedan) {
    if (sedan.hasOwnProperty(key)) {
      if ("object" === typeof sedan[key] && sedan[key] !== null)
        copyObj[key] = greatCopyObject(sedan[key]);
      else copyObj[key] = sedan[key];
    }
  }
  return copyObj;
}
const obj = { here: { is: "name", me: [4, 5] }, object: 1 };
console.log("Исходный объект", obj);
console.log("Скопированный объект", greatCopyObject(obj));