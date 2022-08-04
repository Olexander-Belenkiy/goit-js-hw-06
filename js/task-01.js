const navEl = document.querySelectorAll("li.item");
const totalCategoriesEl = navEl.length;
console.log(`Number of categories: ${totalCategoriesEl}`);

const categoriesEl = navEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
