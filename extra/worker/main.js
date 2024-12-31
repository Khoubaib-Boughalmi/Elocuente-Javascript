// wait for the html to be completly rendered

const worker = new Worker("worker.js");

window.addEventListener("load", () => {
  const backgroundButton = document.querySelector(".background-button");
  const calculationButton = document.querySelector(".calculation-button");

  backgroundButton.addEventListener("click", () => {
    document.body.style.background === ""
      ? (document.body.style.background = "blue")
      : (document.body.style.background = "");
  });

  calculationButton.addEventListener("click", () => {
    worker.postMessage("message from main"); // send message to start the job
  });
  worker.onmessage = function (response) { // recieve message with result
    alert("Sum is: " + response.data);
  };
});
