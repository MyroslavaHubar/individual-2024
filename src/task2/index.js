const refs = {
  form: document.querySelector(".js-form"),
  ul: document.querySelector(".js-items"),
};

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = e.target.elements["full-name"].value.trim();
  const eureka = e.target.elements.eureka.value.trim();
  const imgName = e.target.elements.imgUrl.value.trim();

  const data = { fullName, eureka, imgName };
  // console.log(data);
  const markup = createMarkup(data);
  refs.ul.insertAdjacentHTML("afterbegin", markup);
  refs.form.reset();
});

function createMarkup({ fullName, eureka, imgName }) {
  return `<li class="box item hight">
            <p class="box-text">Name: ${fullName}; Eureka: ${eureka}</p>
            <img src='${imgName}' alt='nameName'/>

            <button class="form-control" data-type="show">SHOW MORE</button>
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`;
}
