const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
let items = [];
const markup = ingredients.map(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.className = "item";
  return item;
});
list.append(...markup);



