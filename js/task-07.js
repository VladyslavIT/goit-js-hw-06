const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
console.log(inputEl, spanEl);

const onTextChange = (event) => {
    spanEl.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener('input', onTextChange);