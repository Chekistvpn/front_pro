console.info("Задача №1, функция глубокого копирования объекта");
function greatCopyObject (sedan, waggon ) {
  if (typeof sedan === 'object' && typeof waggon === 'object' && typeof sedan !== null && typeof waggon !== null) {
    if (sedan instanceof Array && waggon instanceof Array) {
      if (sedan.length !== waggon.length) return false;
    }
    for (let key in sedan ) {
      if (!waggon.hasOwnProperty(key)) return false;
      if (typeof sedan[key] === 'object' && typeof waggon[key] === 'object' && !(sedan instanceof Array) && !(waggon instanceof Array)) {
        if (!greatCopyObject (sedan[key], waggon[key])) return false;
      } else {
          if (sedan[key] !== waggon[key]) return false
      }
    }
    return true;
  } else {
    return sedan === waggon;
  } 
}
let obj = {here: {is: "name", me: [4, 5]}, object: 3};
console.log(greatCopyObject(obj, {here: {is: "name", me: [4, 5]}, object: 3}));