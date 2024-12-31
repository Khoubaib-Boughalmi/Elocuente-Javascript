const inputBoxWithDebounce = document.querySelector("#input-search1");
const inputBoxWithoutDebounce = document.querySelector("#input-search2");

let timer;
const useDebounce = (value, cb) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    cb(value);
  }, 300);
};

const displayContent = (content) => {
  console.log(content);
};
inputBoxWithDebounce.addEventListener("input", (event) => {
  useDebounce(event.target.value, displayContent);
});

inputBoxWithoutDebounce.addEventListener("input", (event) => {
  displayContent(event.target.value);
});
