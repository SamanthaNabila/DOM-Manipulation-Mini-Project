const login = document.getElementById("Login");
const para = document.getElementById("para");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

const Password = document.getElementById("pass");
const showBtn = document.getElementById("show");

const currentSize = window.getComputedStyle(para).fontSize;
let sizeNumber = parseInt(currentSize);

function increase(value) {
  sizeNumber = sizeNumber + value;

  para.style.fontSize = sizeNumber + "px";
  if (sizeNumber >= 30) {
    plus.setAttribute("disabled", true);
  } else {
    plus.removeAttribute("disabled", false);
  }
  if (sizeNumber <= 10) {
    minus.setAttribute("disabled", true);
  } else {
    minus.removeAttribute("disabled", false);
  }
}

plus.addEventListener("click", () => {
  increase(2);
});
minus.addEventListener("click", () => {
  increase(-2);
});
login.addEventListener("click", () => {
  window.location.href = "login.html";
});
