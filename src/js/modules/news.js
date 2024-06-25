import axios from "axios";

const refs = {
  form: document.querySelector(".js-news-form"),
  newsList: document.querySelector(".js-news-list"),
};

async function fetchNews(q) {
  const BASE_URL = "https://newsapi.org/v2";
  const END_POINT = "/everything";
  const url = `${BASE_URL}${END_POINT}`;

  const headers = {
    "X-Api-Key": "c8747511a2c34730a83caaff4f3693e7",
  };

  const params = {
    q,
    pageSize: "10",
  };

  const results = await axios.get(url, { headers, params });
  return results;
}

fetchNews("tesla");

refs.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  const data = await fetchNews(query);
  //   console.log(data);
  const markup = articalTemplates(data.data.articles);
  refs.newsList.innerHTML = markup;
});

function articalTemplate({ title, description, author }) {
  return `<li class="news-item hero-card card">
      <h4>${title}</h4>
      <p class="news-text">${description}</p>
      <p class="news-text">${author}</p>
    </li>`;
}

function articalTemplates(data) {
  return data.map(articalTemplate).join("");
}
