const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Вариант 1
const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);
const ingredientsEl = ingredients.map((ingredient) => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  return listEl;
});
ingredientsList.append(...ingredientsEl);

// Вариант 2
// const ingredientsList = document.querySelector('#ingredients');
// const listEl = [];
// ingredients.forEach((ingredient) => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   listEl.push(item);
  
// });
// console.log(listEl);
// ingredientsList.append(...listEl);

