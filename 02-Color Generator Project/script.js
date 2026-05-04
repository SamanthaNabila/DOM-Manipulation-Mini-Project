const colorBox = document.getElementById("color-box");
const colorText = document.getElementById("color-text");
const copyBtn = document.getElementById("copy-button");
const generateColor = document.getElementById("generate");
const colorGenerator = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const updateColor = () => {
  const color = colorGenerator();
  colorBox.style.background = color;
  colorText.innerText = color;
};

const copyColorCode = () => {
  const inputTag = document.createElement("input");
  document.body.appendChild(inputTag);
  inputTag.value = colorText.innerText;

  inputTag.select();
  document.execCommand("copy");
  document.body.removeChild(inputTag);
  alert("Coppied");
};

copyBtn.addEventListener("click", () => {
  copyColorCode();
});
generateColor.addEventListener("click", () => {
  updateColor();
});
