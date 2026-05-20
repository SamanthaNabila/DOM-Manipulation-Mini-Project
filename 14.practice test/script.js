const statusInput = document.getElementById("product");
const btn = document.getElementById("btn");
const card = document.getElementById("card");

const url = `https://jsonplaceholder.typicode.com/todos`;
let isVisiable = false;

async function fetchData() {
  try {
    if (isVisiable) {
      card.innerHTML = "";
      isVisiable = false;
      return;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No title found");
    }

    const data = await response.json();
    console.log(data);
    const inputValue = JSON.parse(statusInput.value.trim());

    const userData = data.filter((item) => item.completed === inputValue);
    card.innerHTML = userData
      .map((item) => {
        return `
      <p><strong>Title: </strong>${item.title}</p>
      <p><strong>ID: </strong>${item.id}</p>
       <p><strong>User ID: </strong>${item.userId}</p>
    `;
      })
      .join("");
    isVisiable = true;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", fetchData);
