const findTextInDOM = (node, str) => {
  let children = node.children;
  for (let child of children) {
    if (child.innerHTML.includes(str)) {
      return true;
    }
    if (findTextInDOM(child, str) === true) {
      return true;
    }
  }
  return false;
};

console.log(
  findTextInDOM(document.body, "dolor sit amet, consectetur adipisicing elit.")
);

let link = document.getElementsByTagName("a")[0].getAttribute("href");
let paragraph = document.getElementById("paragraph-one");
paragraph.style.color = "red";

console.log(link);
console.log(paragraph.innerHTML);

/**
 *  document.body.getElementsByClassName("numbers") selects elements inside the body, but with the wrapper <div>, the elements are now its children, not direct children of the body. This mismatch causes the insertBefore() method to fail when trying to reorder elements.
  Resolution:

  To fix this, select the wrapper element first, then manipulate the child elements within the wrapper:
 */
const pWrapper = document.body.querySelector(".pWrapper");
const [firstChild, secondChild, thirdChild] = Array.from(
  pWrapper.getElementsByClassName("numbers")
);

// insert third node before the first
pWrapper.insertBefore(thirdChild, firstChild);

// swap the second tag with an image

const imageList = [
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.stWAWw2BWM1jDIOmXQhPqAHaE2%26pid%3DApi&f=1&ipt=0b781c458ecb64c3bed7d5f0dbf35e31e11530bd92742897b764f8f54b772980&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oY2Vl31BFxpC38A-DvubUgHaE5%26pid%3DApi&f=1&ipt=27c1b07fe28da02f5a7b872713a5481753c64a9746b80e61b654ec3e9cf66773&ipo=images",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m4FmOjk0Bx-N4JaBzsBoTgHaEP%26pid%3DApi&f=1&ipt=71d6c28503b0ff003f7697939b229342539eb36c494f60121af7111d65dc9c6a&ipo=images",
];

const imageContainer = document.createElement("div");
imageList.forEach((imgSrc) => {
  let imgNode = document.createElement("img");
  imgNode.src = imgSrc;
  imgNode.width = "320";
  imgNode.width = "320";
  imgNode.alt = String(Math.random());
  imageContainer.appendChild(imgNode);
});

//replaced second child this imageContainer
pWrapper.replaceChild(imageContainer, secondChild);

//replaced all images except first by they their alt (has to start from end otherwise loop will fup)
let images = document.body.getElementsByTagName("img");

for (let i = images.length - 1; i >= 1; --i) {
  image = images[i];
  let newNode = document.createElement("p");
  newNode.innerHTML = image.alt;
  image.parentNode.replaceChild(newNode, image);
}

//read and change custom attributes

customTags = Array.from(document.body.getElementsByClassName("customTag"));
customTags.forEach((elem) => {
  if (elem.getAttribute("data-classified") === "secret") {
    elem.innerHTML = "TRANSFORMED SECRET DUTY";
    elem.setAttribute("data-hidden", "hidden");
  }
});

const boxElem = document.getElementById("box");

console.log(boxElem.clientHeight);
console.log(boxElem.clientWidth);
console.log(boxElem.getBoundingClientRect());

function timer(method, action) {
  let start = Date.now();
  action();
  console.log(`${method} took: ${Date.now() - start} ms`);
}

function slowFn() {
  for (let index = 0; index < 1000000000; index++) {}
}

function fastFn() {}

timer("slow", slowFn);
timer("fast", fastFn);

// select all elements that has data-classified attribute
const dataNodes = document.querySelectorAll("[data-classified]");
console.log(dataNodes);
// select all elements that are p
const divNodes = document.querySelectorAll("p");
console.log(divNodes);

// select all elements that children of wrapper
const wrapperPChild = document.querySelectorAll(".pWrapper p");
console.log(wrapperPChild);

/**
 * 1. Adjacent Sibling Selector (+)

    const elements = document.querySelectorAll(".sibling1 + .sibling2");

    CSS selector: .sibling1 + .sibling2
    Meaning: This selects any element with the class .sibling2 that is immediately following an element with the class .sibling1. In other words, .sibling2 must be the next sibling directly after .sibling1.

    Example:

    <div class="sibling1">First</div>
    <div class="sibling2">Second</div>
    <div class="sibling2">Third</div>

        In this example, the first .sibling2 (with content "Second") would be selected because it immediately follows .sibling1 (with content "First").
        The second .sibling2 (with content "Third") will not be selected because it is not immediately following .sibling1.

    2. General Sibling Selector (~)

    const elements = document.querySelectorAll(".sibling1 ~ .sibling2");

        CSS selector: .sibling1 ~ .sibling2
        Meaning: This selects any element with the class .sibling2 that is a sibling of .sibling1, and appears after it in the DOM. Unlike the adjacent sibling selector, .sibling2 does not need to be immediately after .sibling1; it just needs to appear later in the document.

    Example:

    <div class="sibling1">First</div>
    <div class="sibling3">Other</div>
    <div class="sibling2">Second</div>
    <div class="sibling2">Third</div>

    In this example, both .sibling2 elements ("Second" and "Third") would be selected because they are siblings of .sibling1 and come after it in the document.
    Even though .sibling3 is between .sibling1 and .sibling2, the general sibling selector does not care about intermediate siblings. It will still select all .sibling2 elements that come after .sibling1 in the DOM.
 */

document.addEventListener("DOMContentLoaded", function () {
  let cat = document.body.querySelector("p > .mochito");

  let angle = Math.PI / 2;
  function animate(time, lastTime) {
    if (lastTime != null) {
      angle += (time - lastTime) * 0.001;
    }
    cat.style.top = Math.sin(angle) * 20 + "px";
    cat.style.left = Math.cos(angle) * 200 + "px";
    requestAnimationFrame((newTime) => animate(newTime, time));
  }
  requestAnimationFrame(animate);
});
