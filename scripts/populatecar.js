const url =
  "https://anime-db.p.rapidapi.com/anime?page=1&size=15&sortBy=ranking&sortOrder=asc";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd7ddf795dmsh355454f99e9b4ccp1e0eb7jsn61a06f02bec7",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};
let count = 0;
const animeAPI = fetch(url, options);
animeAPI
  .then((response) => response.json())
  .then((anime) => {
    console.log(anime);
    for (let x of anime.data) {
      let container = document.querySelector("#temp").content.cloneNode(true);
      let div = container.querySelector(".contentHolder");
      let img = div.querySelector("img");
      let h3 = div.querySelector("h3");
      img.src = x.image;
      h3.textContent = x.title;
      div.addEventListener("click", () => {
        window.location = x.link; // <<<< hey this was changed yall ok????
      });
      if (count < 5) {
        let insert = document.querySelector("#a1");
        if (count == 3 || count == 4) {
          div.classList.add("hide");
        }
        insert.appendChild(div);
      } else if (count < 10) {
        let insert = document.querySelector("#a2");
        if (count == 8 || count == 9) {
          div.classList.add("hide");
        }
        insert.appendChild(div);
      } else {
        let insert = document.querySelector("#a3");
        if (count == 13 || count == 14) {
          div.classList.add("hide");
        }
        insert.appendChild(div);
      }
      count++;
    }
  })
  .catch(console.error);

const moviesURL = "https://imdb-top-100-movies.p.rapidapi.com/";
const optionsM = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd7ddf795dmsh355454f99e9b4ccp1e0eb7jsn61a06f02bec7",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const moviesAPI = fetch(moviesURL, optionsM);

moviesAPI
  .then((response) => response.json())
  .then((movies) => {
    console.log("here");
    console.log(movies);
    for (let x = 0; x < 15; x++) {
      let container = document.querySelector("#temp").content.cloneNode(true);
      let div = container.querySelector(".contentHolder");
      let img = div.querySelector("img");
      let h3 = div.querySelector("h3");

      const workingData = movies[x];

      img.src = workingData.image;
      h3.textContent = workingData.title;
      div.addEventListener("click", () => {
        window.location = workingData.imdb_link;
      });
      if (x < 5) {
        let insert = document.querySelector("#m1");
        if (x == 3 || x == 4) {
          div.classList.add("hide");
        }
        insert.appendChild(div);
      } else if (x < 10) {
        let insert = document.querySelector("#m2");
        if (x == 8 || x == 9) {
          div.classList.add("hide");
        }
        insert.appendChild(div);
      } else {
        let insert = document.querySelector("#m3");
        if (x == 13 || x == 14) {
          div.classList.add("hide");
        }
        insert.appendChild(div);
      }
    }
  })
  .catch(console.error);

const showsURL = "https://imdb-top-100-movies.p.rapidapi.com/series/";
const optionsS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd7ddf795dmsh355454f99e9b4ccp1e0eb7jsn61a06f02bec7",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const showsAPI = fetch(showsURL, optionsS);

showsAPI
  .then((response) => response.json())
  .then((shows) => {
    console.log("here");
    console.log(shows);
    for (let x = 0; x < 16; x++) {
      if (x != 13) {
        let container = document.querySelector("#temp").content.cloneNode(true);
        let div = container.querySelector(".contentHolder");
        let img = div.querySelector("img");
        let h3 = div.querySelector("h3");

        const workingData = shows[x];

        img.src = workingData.image;
        h3.textContent = workingData.title;
        div.addEventListener("click", () => {
          window.location = workingData.imdb_link;
        });
        if (x < 5) {
          let insert = document.querySelector("#s1");
          if (x == 3 || x == 4) {
            div.classList.add("hide");
          }
          insert.appendChild(div);
        } else if (x < 10) {
          let insert = document.querySelector("#s2");
          if (x == 8 || x == 9) {
            div.classList.add("hide");
          }
          insert.appendChild(div);
        } else {
          let insert = document.querySelector("#s3");
          if (x == 14 || x == 15) {
            div.classList.add("hide");
          }
          insert.appendChild(div);
        }
      }
    }
  })
  .catch(console.error);
