// script.js

const country = document.getElementById("country");
const btn = document.getElementById("btn");
const card = document.getElementById("card");

// fetch country data
async function fetchData() {
  try {
    // input value
    const countryName = country.value.trim();

    // check empty input
    if (countryName === "") {
      card.innerHTML = "<p>Please enter a country name</p>";
      return;
    }

    // loading message
    card.innerHTML = "<p>Loading...</p>";

    // API call
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`,
    );

    // handle error
    if (!response.ok) {
      throw new Error("Country not found");
    }

    // convert json
    const data = await response.json();
    console.log(data);

    // country info
    const countryData = data[0];

    // show in browser
    card.innerHTML = `
  
    <img src="${countryData.flags.png}" width="200" />

    <h2>${countryData.name.common}</h2>

    <p><strong>Capital:</strong> ${countryData.capital[0]}</p>

    <p><strong>Region:</strong> ${countryData.region}</p>

    <p><strong>Population:</strong> ${countryData.population}</p>
  
`;
  } catch (error) {
    console.log(error);

    card.innerHTML = `
  <p style="color:red;">Country not found</p>
`;
  }
}

// button click event
btn.addEventListener("click", fetchData);
