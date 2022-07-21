// 1 вариант
// const categoriesEl = document.querySelector('#categories');
// console.log(`Number of categories: ${categoriesEl.children.length}`);
// const titleEl = document.querySelectorAll('h2');
// titleEl.forEach(item => {
    // console.log(`Category: ${item.textContent}`);
    // console.log(`Elements: ${item.parentNode.querySelectorAll('li').length}`);
// });

// 2 вариант
const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log((`Elements: ${item.querySelectorAll('li').length}`));
})

