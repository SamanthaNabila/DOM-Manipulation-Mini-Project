const products = document.getElementById("product");
const btn = document.getElementById("btn");
const card = document.getElementById("card");

const url = `https://fakestoreapi.com/products`;
let isVisiable = false;

async function fetchData() {
  try {
    if (isVisiable) {
      card.innerHTML = " ";
      isVisiable = false;
      return;
    }
    const productTitle = products.value.trim();

    if (productTitle === "") {
      card.innerHTML = `<p>No input</p>`;
      return;
    }

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Product not Found");
    }

    const data = await response.json();
    console.log(data);

    const productData = data.find(
      (productName) =>
        productName.title.toLowerCase() === productTitle.toLowerCase(),
    );

    card.innerHTML = `<h3>${productData.price}</h3>
    <h3>${productData.rating.count}</h3>
    <p>${productData.description}</p>
    <p>${productData.category}</p>
    `;

    isVisiable = true;
  } catch (error) {
    console.log(error);
  }
}
btn.addEventListener("click", fetchData);
