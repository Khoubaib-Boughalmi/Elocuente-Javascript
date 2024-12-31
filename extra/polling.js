// make a request to server every 1sec
const MAX_POLL = 5;

let timeoutCount = 0;
function pollServerTimeout() {
  let postId = Math.floor(Math.random() * 200);
  const url = `https://jsonplaceholder.typicode.com/todos/${postId}`;
  fetch(url)
    .then((response) => response.json())
    .then(console.log)
    .catch((err) => console.log(err));
  const timeout = setTimeout(() => pollServerTimeout(), 1000);
  if (timeoutCount++ == MAX_POLL) {
    clearTimeout(timeout);
    return;
  }
}

// pollServerTimeout();


let intervalCount = 0;

function pollServerInterval() {
  const interval = setInterval(() => {
    if (intervalCount++ == MAX_POLL) {
      clearInterval(interval);
      return ;
    }
    let postId = Math.floor(Math.random() * 200);
    const url = `https://jsonplaceholder.typicode.com/todos/${postId}`;
    fetch(url)
      .then((response) => response.json())
      .then(console.log)
      .catch((err) => console.log(err));
  }, 2000);
}

pollServerInterval();
