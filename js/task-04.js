let counterValue = 0;
const decrementBnt = document.querySelector('[data-action="decrement"]');
const incrementBnt = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
console.log(decrementBnt, incrementBnt, valueEl);

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBnt.addEventListener("click", decrement);
incrementBnt.addEventListener("click", increment);
