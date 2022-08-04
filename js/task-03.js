const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const ulIngredients = document.querySelector("#ingredients");
// const newArray2 = [];
// ingredients.forEach((element) => {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   const listText = document.createTextNode(element);
//   listEl.appendChild(listText);
//   newArray2.push(listEl);
// });
// ulIngredients.append(...newArray2);
// =========
// const galleryList = document.querySelector(".gallery");
// const galleryItem = ({ url, alt }) =>
//   `<li><img src = "${url}" alt = "${alt}" width = 300 height = 200> </li>`;
// const galeryEl = images.reduce((item, items) => item + galleryItem(items), "");
// galleryList.insertAdjacentHTML("beforeend", galeryEl);
// =========

// const listEl = document.querySelector(".gallery");
// const createGallaryEl = images.reduce((acc, { url, alt }) => {
//   return acc + `<li ><img width="270" src="${url}" alt="${alt}" /></li>`;
// }, " ");
// listEl.insertAdjacentHTML("beforeend", createGallaryEl);

// ==============
// мое решение - есть андефайнд(
const galleryEl = document.querySelector(".gallery");
const createGallaryEl = images.map(({ url, alt }) => {
  const listEl = document.createElement("li");
  const imgEl = document.createElement("img");
  listEl.append(imgEl);
  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.width = 320;
  return listEl;
});

// galleryEl.append(...createGallaryEl);
const newGallary = galleryEl.append(...createGallaryEl).join("");
galleryEl.insertAdjacentHTML("beforeend", newGallary);
