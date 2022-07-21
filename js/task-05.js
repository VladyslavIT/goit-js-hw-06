const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
console.log(inputEl, spanEl);

 const onInputChange = (event) => {
    spanEl.textContent = event.currentTarget.value || "Anonymous";
 };

inputEl.addEventListener('input', onInputChange );
