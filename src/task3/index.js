const refs = {
  form: document.querySelector(".js-form"),
  ul: document.querySelector(".js-items"),
};

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userColor = e.target.elements["user-color"].value.trim();
  const markup = colorTemplate(userColor);
  refs.ul.insertAdjacentHTML("afterbegin", markup);
  refs.form.reset();
});

function colorTemplate(usercolor) {
  return `<li class="box item hight">
            <div class="item-color" style="background-color: ${usercolor}"></div>
            <button class="form-control" data-type="show" data-color='${usercolor}'>SHOW MORE</button>
            <button class="form-control js-remove-btn" data-type="delete">DELETE</button>
          </li>`;
}

//===========================================================================

refs.ul.addEventListener("click", (e) => {
  //   if (e.target.textContent !== "DELETE") return;
  //   if (e.target.dataset.type !== "delete") return;
  if (!e.target.classList.contains("js-remove-btn")) return;

  const liElem = e.target.closest("li.item");
  liElem.remove();
  //   console.log(e.target.remove);
});

//============================================================================

refs.ul.addEventListener("click", (e) => {
  if (e.target.dataset.type !== "show") return;
  // console.log(e.target.dataset.color);

  const instance = basicLightbox.create(`
    <div style="background-color: ${e.target.dataset.color}; width: 500px; height: 500px"></div>
`);

  instance.show();
});
