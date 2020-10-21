const API_USER = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");


const getUser = async(username) => {
    const response = await fetch(API_USER + username);
    const responseData = await response.json();

    createUserCard(responseData);    
    getRepos(username);
}

const getRepos = async (username) => {
    const response = await fetch(API_USER + username + "/repos");
    const responseData = await response.json();
    addReposToCard(responseData)

}

const addReposToCard = (repos) => {
    console.log("repos", repos);
    const reposEl = document.getElementById("repos");

    // 자바스크립트 내에서 html a태그 만들어버리기
    repos.slice(0, 10).forEach((repo) => {  
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");// 각 element마다 class 이름 추가
    
        repoEl.href = repo.html_url; //  링크 걸기 a href
        repoEl.target = "_blank"; // 페이지 어디서 열지
        repoEl.innerText = repo.name; // a태그 innerText 
    
        /**
         * <a class="repo" href={repo.html_url} target="_black">{repo.name}</a>
         */
        reposEl.appendChild(repoEl);
      });
    };

const createUserCard = (user) => {
    const cardHTML = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul class="info">
          <li><strong>Followers</strong>${user.followers}</li>
          <li><strong>Following</strong>${user.following}</li>
          <li><strong>Repos</strong>${user.public_repos}</li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
    main.innerHTML = cardHTML;
}

form.addEventListener("submit", (event) => {
    event.preventDefault(); // 기존에 가지고 있던 기능을 실행하지 않겠다.

    const user = input.value;

    if(user) {
        getUser(user);

        input.value = "";
    }
});

