const inputEl = document.querySelector("#validation-input");
console.log(inputEl);

const onInputBlur = (event) => {
  if (event.currentTarget.value.length !== +inputEl.dataset.length) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", onInputBlur);
