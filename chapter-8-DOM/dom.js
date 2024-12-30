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

console.log(link);
console.log(paragraph.innerHTML);

const [firstChild, secondChild, thirdChild] = Array.from(
  document.body.getElementsByClassName("numbers")
);

// insert third node before the first
document.body.insertBefore(thirdChild, firstChild);

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
document.body.replaceChild(imageContainer, secondChild);

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
