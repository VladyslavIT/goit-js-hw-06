const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const onInputBlur = (event) => {
    if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid')
    } else {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }   
};

inputEl.addEventListener('blur', onInputBlur);


