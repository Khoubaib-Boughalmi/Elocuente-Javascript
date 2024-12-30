window.addEventListener("click", () => {
  // console.log("window clicked");
});

const clickMeButton = document.querySelector(".clickMe");

let count = 0;
const incrementTwice = () => {
  if (count === 2) {
    clickMeButton.removeEventListener("click", incrementTwice);
    return;
  }
  console.log(count);
  count++;
};
clickMeButton.addEventListener("click", incrementTwice);

// EVENT OBJECT

clickMeButton.addEventListener("mousedown", (event) => {
  if (event.button === 0) {
    console.log("left button");
  } else if (event.button === 1) {
    console.log("scroll button");
  } else if (event.button === 2) {
    console.log("right button");
  }
});

// Propagating Event

const propParagraph = document.querySelector(".propagatingEvent");
const propButton = document.querySelector(".propagatingEvent > button");

propParagraph.addEventListener("mousedown", () => {
  console.log("paragraph or button clicked (not left click though)");
});

propButton.addEventListener("mousedown", (event) => {
  console.log("Button clicked");
  if (event.button === 0) event.stopPropagation();
});

function generateRandomColor() {
  const v1 = Math.floor(Math.random() * 256).toString(16);
  const v2 = Math.floor(Math.random() * 256).toString(16);
  const v3 = Math.floor(Math.random() * 256).toString(16);

  return `#${v1}${v2}${v3}`;
}
window.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    document.body.style.background = generateRandomColor();
    // const newH2 = document.createElement("h2");
    // newH2.innerHTML = "test";
    // propParagraph.appendChild(newH2);
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    document.body.style.background = "";
  }
});

// DRAW A DOT IN PAGE

window.addEventListener("mousedown", (event) => {
  if (event.button == 0)
    window.addEventListener("mousemove",drawFlow);
  else if (event.button == 1)
    window.addEventListener("mousemove",removeFlow);
});

window.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", drawFlow);
  window.removeEventListener("mousemove", removeFlow);
});

const drawFlow = (event) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.width = "10px";
  dot.style.height = "10px";
  dot.style.borderRadius = "99px";
  dot.style.top = `${event.pageY - 6}px`;
  dot.style.left = `${event.pageX - 6}px`;
  dot.style.position = "absolute";
  dot.style.background = generateRandomColor();
  document.body.appendChild(dot);
};

const removeFlow = (event) => {
  target = event.target;
  if (document.body.contains(target))
    document.body.removeChild(target);
}