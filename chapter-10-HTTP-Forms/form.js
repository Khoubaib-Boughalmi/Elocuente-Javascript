const form = document.querySelector("form");

console.log(form.elements);
console.log(form.elements[0].type);
console.log(form.elements[1].type);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Saving value", form.elements[0].value);
});

const selectElement = document.querySelector("select");
const resultField = document.querySelector("#output");

selectElement.addEventListener("change", () => {
  console.log(selectElement.options)
  resultField.innerHTML = selectElement.selectedOptions["0"].innerHTML;
});
