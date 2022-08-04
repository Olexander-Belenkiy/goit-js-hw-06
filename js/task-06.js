const textInput = document.querySelector("#validation-input");
// textInput.addEventListener("focus", () => {
//   //   textInput.preventDefault();
//   textInput.classList.remove("valid", "invalid");
//   textInput.value = "";
// });
textInput.addEventListener("blur", () => {
  textInput.classList.remove("valid", "invalid");
  const onValid = textInput.value.length === +textInput.dataset.length;
  const addClass = onValid ? "valid" : "invalid";
  textInput.classList.add(addClass);
});
// =============

// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };
// ===============

// let inputEl = document.querySelector("#validation-input");
// let inputLength = inputEl.dataset.length;
// const input = document.querySelector("input");
// inputEl.addEventListener("change", (e) => {
//   const text = e.target.value;
//   if (text.length === +inputLength) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.remove("valid");
//     inputEl.classList.add("invalid");
//   }
// });
