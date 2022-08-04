const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  //   const userDetails = { email: email.value, Password: password.value };
  const userDetails = {};
  Object.keys(event.currentTarget.elements).map((key) => {
    if (key.length > 1) {
      userDetails[key] = event.currentTarget.elements[key].value;
    }
  });
  console.log(userDetails);
  event.currentTarget.reset();
}
