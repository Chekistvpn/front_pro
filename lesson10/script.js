//Задача - Написать функцию generateList. Принимает массив из чисел и массивов чисел, например: [1, 2, [1.1, 1.2, 1.3], 3]. 
//Нужно сгенерировать список из элементов. Если в массиве встречается массив, то нужно сделать вложенный список.
let generateParagraf = document.createElement("p");
generateParagraf.innerText = "Создание нового списка:"; 
generateParagraf.style.fontWeight = "bold";
generateParagraf.style.color = "red";
document.body.appendChild(generateParagraf);
function generateList(someArray) {
  let generateUl = document.createElement("ul");
  generateUl.style.color = "blue";
  someArray.forEach(function (el) {
    let generateLi = document.createElement("li");
    let childElement;
    if (Array.isArray(el)) {
      childElement = generateList(el);
    } else {
      childElement = document.createTextNode(el);
    }
    generateLi.appendChild(childElement);
    generateUl.appendChild(generateLi);
  });
  return generateUl;
};
//document.body.appendChild(generateList([1, 2, 3]));
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]));