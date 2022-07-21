const buttonEl = document.querySelector('.change-color');
const color = document.querySelector('.color');
const bodyClass = document.body.classList.add('body-color');
const bodyColor = document.querySelector('.body-color');
console.log(buttonEl,color, bodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onAddColor = (event) => {
  event.preventDefault()
  let bgColor = getRandomHexColor();
  color.textContent = bgColor;
  bodyColor.style.backgroundColor = bgColor;
  console.log(bgColor);
};

buttonEl.addEventListener('click', onAddColor);


