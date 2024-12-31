self.addEventListener("message", () => {
  let sum = 0;
  for (let i = 0; i < 1000000000; ++i) {
    sum += i;
  }
  this.postMessage({sum, message: "This was hella of calculation"});
});
