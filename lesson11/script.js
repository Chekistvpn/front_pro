//Задача №1
console.info(
  "Задача: Вывести таблицу 10 × 10, заполненную числами от 1 до 100."
);
let body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
function createHeader() {
  let makeHeader = document.createElement("header");
  makeHeader.classList.add("header");
  document.body.appendChild(makeHeader);
  let makeH1 = document.createElement("h1");
  makeH1.classList.add("header__primary-title");
  makeHeader.style.display = "flex";
  makeHeader.style.justifyContent = "center";
  makeHeader.appendChild(makeH1);
  makeH1.innerText = "Таблица умножения от 1 до 10.";
  makeH1.style.color = "blue";
  return makeHeader;
}
function createMultiplicationTable() {
  let makeHeader = document.createElement("header");
  makeHeader.classList.add("header");
  document.body.appendChild(makeHeader);
  let makeH1 = document.createElement("h1");
  makeH1.classList.add("header__primary-title");
  makeHeader.style.display = "flex";
  makeHeader.style.justifyContent = "center";
  makeHeader.appendChild(makeH1);
  makeH1.innerText = "Таблица умножения от 1 до 10.";
  makeH1.style.color = "blue";
  let makeTable = document.createElement("table");
  makeTable.classList.add("table");
  makeTable.style.borderCollapse = "collapse";
  makeTable.style.display = "block";
  makeTable.style.margin = "0 auto";
  for (let i = 0; i <= 10; i++) {
    let makeTr = document.createElement("tr");
    makeTr.style.margin = "0 auto";
    for (let j = 0; j <= 10; j++) {
      let makeTd = document.createElement("td");
      makeTr.appendChild(makeTd);
      makeTd.style.border = "1px solid black";
      makeTd.style.padding = "3px";
      makeTd.style.width = "50px";
     if (i === 0 && j === 0) {
      makeTd.style.backgroundColor = "#AFEEEE";
      }
      else if (i === 0 && j > 0) {
        makeTd.innerText = j;
        makeTd.style.backgroundColor = "#AFEEEE";
      }
      else if (j === 0 && i > 0) {
        makeTd.innerText = i;
        makeTd.style.backgroundColor = "#AFEEEE";
      }
      else {
        makeTd.style.backgroundColor = "#FFF8DC";
        number = i * j;
        makeTd.innerText = i * j;
        if (i === j) {
          makeTd.style.backgroundColor = "grey";
        }
        if (number < 10) {
          makeTd.innerText =  "0" + number;
        }
      }
    }
    makeTable.appendChild(makeTr);
  }
  document.body.appendChild(makeTable);
}
createMultiplicationTable();
