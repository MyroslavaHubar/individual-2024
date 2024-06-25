import axios from "axios";

const refs = {
  form: document.querySelector(".js-movie-form"),
  movieList: document.querySelector(".js-movie-list"),
};

async function fetchMovie(query) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const END_POINT = "/search/movie";
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    language: "en-US",
    query,
  };
  const headers = {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjBkMmNiODczZWNkY2Y3MzNmYTYyMmI5YjM1NDdkZiIsIm5iZiI6MTcxOTM0MTY1OC44ODk1ODcsInN1YiI6IjYyMTRhOTE4MGI1ZmQ2MDAxYjJhZjRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mnJ4i3AWmKmPhE0bTjWecO2-MTrDc-_s0dtFSH8wkEk",
  };

  const result = await axios.get(url, { headers, params });
  return result;
}

fetchMovie("spiderman");

refs.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  const data = await fetchMovie(query);
  //   console.log(data.data);
  const markup = renderMovies(data.data.results);

  refs.movieList.innerHTML = markup;
});

function renderMovie({ title, overview }) {
  return `<li class="movie-item hero-card card">
      <h4>${title}</h4>
      <p class="movie-text">${overview}</p>
    </li>`;
}

function renderMovies(movies) {
  return movies.map(renderMovie).join("");
}
