const generatePassword = () => {
  const lengthPass = document.getElementById("passlength").value;
  const charset =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+";
  let randomPassword = "";
  for (let i = 0; i < lengthPass; i++) {
    const randomIndex = Math.round(Math.random() * charset.length);
    const randomChar = charset[randomIndex];
    randomPassword += randomChar;
  }
  document.getElementById("showPassword").innerText = randomPassword;
};
