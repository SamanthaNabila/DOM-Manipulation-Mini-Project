const Password = document.getElementById("pass");
const showBtn = document.getElementById("show");

showBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (Password.type === "password") {
    Password.type = "text";
    showBtn.innerText = "Hide";
  } else {
    Password.type = "password";
    showBtn.innerText = "Show";
  }
});
