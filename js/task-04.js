// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const counterValue = document.querySelector("#value");
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// decrementBtn.addEventListener("click", () => {
//   counter.decrement();
//   counterValue.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", () => {
//   counter.increment();
//   counterValue.textContent = counter.value;
// });
// ==========================
let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  // if (counterValue == 0)
  // return;
  counterValue -= 1;
  spanValue.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
