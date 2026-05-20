const btn = document.getElementById("btn");
    const loading = document.getElementById("loading");
    const errorText = document.getElementById("error");

    const card = document.getElementById("card");

    const userImg = document.getElementById("userImg");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const country = document.getElementById("country");

    async function fetchUser() {

      try {

        loading.style.display = "block";
        errorText.textContent = "";
        card.style.display = "none";

        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const user = data.results[0];

        userImg.src = user.picture.large;

        name.textContent =
          `${user.name.first} ${user.name.last}`;

        email.textContent = `Email: ${user.email}`;

        country.textContent =
          `Country: ${user.location.country}`;

        card.style.display = "block";

      } catch (error) {

        errorText.textContent =
          "Something went wrong!";

        console.log(error);

      } finally {

        loading.style.display = "none";
      }
    }

    btn.addEventListener("click", fetchUser);

  