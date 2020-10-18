
const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");
const createUserCard = (user) => {
  const cardHTML =  `
    <h2>${user.name}</h2>`

    main.innerHTML = cardHTML;
}

const getUser = async(username) => {
    const response = await fetch("https://api.github.com/users/" + username);
    const responseData = await response.json();
    console.log("responseData", responseData);


    createUserCard(responseData);
}

//getUser(input.value);

const response = await fetch("https://api.github.com/users/")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user = input.value;

    if(user) {
        getUser(user);
        input.value = "";
    }
}) 