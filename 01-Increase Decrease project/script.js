const counterElement = document.getElementById("number");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

let counter = 0;
function updateCounter(value) {
  counter = counter + value;
  counterElement.textContent = counter;

  if (counter >= 10) {
    plusBtn.setAttribute("disabled", true);
  } else {
    plusBtn.removeAttribute("disabled", false);
  }

  //Form minuas Button
  if (counter <= 0) {
    minusBtn.setAttribute("disabled", true);
  } else {
    minusBtn.removeAttribute("disabled", false);
  }
}

plusBtn.addEventListener("click", () => {
  updateCounter(1);
});
minusBtn.addEventListener("click", () => {
  updateCounter(-1);
});
