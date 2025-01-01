const inputBoxWithDebounce = document.querySelector("#input-search1");
const inputBoxWithoutDebounce = document.querySelector("#input-search2");

const useDebounce = () => {
  let timer;
  return (value, cb) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(value).then(console.log).catch(console.log);
    }, 300);
  };
};

const displayContent = (content) => {
  let postId = Math.floor(Math.random() * 200);
  const url = `https://jsonplaceholder.typicode.com/todos/${postId}`;
  return new Promise((resolve, _) => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        resolve({
          result,
          content,
          message: "Your content has been server successfully",
        });
      })
      .catch((err) => reject(err));
  });
};

const useDebounceHandler = useDebounce();

inputBoxWithDebounce.addEventListener("input", (event) => {
  useDebounceHandler(event.target.value, displayContent);
});

inputBoxWithoutDebounce.addEventListener("input", (event) => {
  displayContent(event.target.value).then((response) => {
    console.log(response);
  });
});
