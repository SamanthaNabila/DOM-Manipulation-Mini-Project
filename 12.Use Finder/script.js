const users = document.getElementById("country");
const btn = document.getElementById("btn");
const card = document.getElementById("card");

const url = `https://jsonplaceholder.typicode.com/users`;
let isVisible = false;
async function fetchData() {
  try {
    if (isVisible) {
      card.innerHTML = "";
      isVisible = false;
      return;
    }
    const userName = users.value.trim();

    if (userName === "") {
      card.innerHTML = "<P>Please Enter USer NAme</p>";
      return;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();
    console.log(data);
    const userData = data.find(
      (user) => user.username.toLowerCase() === userName.toLowerCase(),
    );

    card.innerHTML = `<h3>${userData.name}</h3>
    <h3>${userData.email}</h3>
    <h3>${userData.address.city}</h3>`;
    isVisible = true;
  } catch (error) {
    console.log("error");
  }
}

btn.addEventListener("click", fetchData);
