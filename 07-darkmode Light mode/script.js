const checkbox = document.getElementById("color");
const moodChanger = () => {
  if (checkbox.checked) {
    document.body.style.backgroundColor = "#000";
    alert("switch to dark mode");
  } else {
    document.body.style.backgroundColor = "#fff";
    alert("switch to light mode");
  }
};

checkbox.addEventListener("change", () => {
  moodChanger();
});
