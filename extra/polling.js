// make a request to server every 2sec
function pollServer() {
  let postId = Math.floor(Math.random() * 200);
  const url = `https://jsonplaceholder.typicode.com/todos/${postId}`;
  fetch(url)
    .then((response) => response.json())
    .then(console.log)
    .catch((err) => console.log(err));
  setTimeout(() => pollServer(url), 2000);
}

pollServer();
