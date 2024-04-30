const apiKey = 'ecc0c35c'; // Replace with your actual OMDB API key

async function searchMovies(query) {
  const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
  const data = await response.json();
  return data.Search || [];
}

async function fetchMovieDetails(movieId) {
  const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
}

async function displayMovieDetails(movieId) {
  const movieDetails = await fetchMovieDetails(movieId);
  // Display movie details however you want, for example:
  const movieDetailsContainer = document.getElementById("movieDetails");
  movieDetailsContainer.innerHTML = `
    <h2>${movieDetails.Title}</h2>
    <p><strong>Year:</strong> ${movieDetails.Year}</p>
    <p><strong>Rated:</strong> ${movieDetails.Rated}</p>
    <p><strong>Released:</strong> ${movieDetails.Released}</p>
    <p><strong>Runtime:</strong> ${movieDetails.Runtime}</p>
    <p><strong>Genre:</strong> ${movieDetails.Genre}</p>
    <p><strong>Director:</strong> ${movieDetails.Director}</p>
    <p><strong>Actors:</strong> ${movieDetails.Actors}</p>
    <p><strong>Plot:</strong> ${movieDetails.Plot}</p>
    <p><strong>IMDb Rating:</strong> ${movieDetails.imdbRating}</p>
    <p><strong>IMDb Votes:</strong> ${movieDetails.imdbVotes}</p>
    <img src="${movieDetails.Poster}" alt="${movieDetails.Title} Poster">
  `;
}

async function displayMovieTitles(query) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  const movies = await searchMovies(query);
  movies.forEach(movie => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = movie.Title;
    button.addEventListener("click", () => {
      displayMovieDetails(movie.imdbID);
    });
    listItem.appendChild(button);
    movieList.appendChild(listItem);
  });
}

document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value.trim();
  if (query) {
    displayMovieTitles(query);
  } else {
    document.getElementById("movieList").innerHTML = "";
  }
});
