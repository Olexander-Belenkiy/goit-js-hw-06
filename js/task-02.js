const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");
const newArray2 = [];
ingredients.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  const listText = document.createTextNode(element);
  listEl.appendChild(listText);
  newArray2.push(listEl);
});
ulIngredients.append(...newArray2);
