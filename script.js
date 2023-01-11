// Difficulty: 2

// Closure

// Buttons: Blue, Pink, Green

function changeColor(color) {
    return function () {
      document.body.style.background = color;
    };
}
  
  const bgColorBlue = changeColor("#0f62fe");
  const bgColorPink = changeColor("#ff7eb6");
  const bgColorGreen = changeColor("#42be65");

// function changeColor(color) {
//     document.body.style.backgroundColor = color;
// }

// document.querySelector("#blue").addEventListener("click", () => changeColor("#0f62fe"))
// document.querySelector("#pink").addEventListener("click", () => changeColor("#ff7eb6"))
// document.querySelector("#green").addEventListener("click", () => changeColor("#42be65"))

document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen);