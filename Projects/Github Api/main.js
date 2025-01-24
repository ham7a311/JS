


const input = document.querySelector(".repos input");
const btn = document.querySelector(".button");
const data = document.querySelector(".show");


btn.addEventListener("click", () => {

    showRepos();

})


function showRepos() {

    if (input.value === "") {

        data.innerHTML = "<span>Please Write A Github Username</span>";

    } else {

        const api = fetch(`https://api.github.com/users/${input.value}/repos`);

        api.then(res => res.json())
            .then(repos => {
                data.innerHTML = "";

                repos.forEach(repo => {
                    const main = document.createElement("div"); 
                    
                    const nameEl = document.createElement("p");
                    const name = document.createTextNode(repo.name);

                    nameEl.appendChild(name);

                    main.appendChild(nameEl);

                    const stars = document.createElement("span");
                    const starsText = document.createTextNode(`${repo.stargazers_count} Stars`);

                    stars.appendChild(starsText);

                    main.appendChild(stars);

                    const url = document.createElement("a");
                    const urlText = document.createTextNode("Visit");

                    url.appendChild(urlText);

                    url.href = `https://github.com/${input.value}/${repo.name}`;

                    url.setAttribute("target", "blank");

                    main.appendChild(url);


                    main.className = "box";

                    data.appendChild(main);
                    console.log(repo)
                })
        })

    }

}
