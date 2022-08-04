// const inpEl = document.querySelector("#font-size-control");
// const outputSize = document.querySelector("#text");
// outputSize.classList.add(input-style);
// inpEl.addEventListener("input", (element) => {
//   const valInput = element.target.value;
//     outputSize.style.fontSize = $ { valInput } px;
//   return outputSize.style.fontSize;
// });

const textEl = document.getElementById("text");
const inputEl = document.getElementById("font-size-control");

textEl.style.fontSize = inputEl.value + "px";
inputEl.addEventListener("input", () => {
  const size = inputEl.value;
  // console.log(size);

  textEl.style.fontSize = size + "px";
});
