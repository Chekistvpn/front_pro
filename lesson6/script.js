//Задача №1
console.info("Задача №1");
function copy(origin) {
  let target = {};
  for (let key in origin) {
    target[key] = origin[key];
  }
  return target;
}
const origin = {
  product: "хлеб",
  title: "пшеничный",
  extent: "свежий",
  additive: "кунжут",
};
console.log(copy(origin));

//Задача №2
console.info("Задача №2");
function takeProduct(sedan, waggon) {
    let sedanCount = 0;
    let waggonCount =0;
  for (let sedanKey in sedan) {
    let sedanValue = sedan[sedanKey];
    sedanCount++;
    for (let waggonKey in waggon) {
      let waggonValue = waggon[waggonKey];
      waggonCount++;
      if (waggonValue === sedanValue && waggonKey === sedanKey) {
        return true;
        } else {
            return false;
        }
    }
  }
  if (sedanCount !== waggonCount) {
    return false;
  }
};
const sedan = {
  color: "red",
  interior: "leather",
  discs: 16,
};
const waggon = {
  color: "red",
  interior: "leather",
  discs: 16,
 // engine: 2,
};
console.log(takeProduct(sedan, waggon));

//Задача №3
function countCharacters(str) {
  let readyObject = {};
  let characters = str.split("");
  for (let i = 0; i < characters.length; i++) {
    let count = readyObject[characters[i]]? readyObject[characters[i]] : 0;
    readyObject[characters[i]] = count + 1; 
  }
  return readyObject;
}
console.log(countCharacters ("aaabbc"));










