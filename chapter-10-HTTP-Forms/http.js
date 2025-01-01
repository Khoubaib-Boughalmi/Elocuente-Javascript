/**
 *  Use axios if you prefer automatic rejection for HTTP errors and built-in JSON parsing.
 *  Use fetch if you want a lightweight, native solution and are okay with manually checking for HTTP errors.
 */

/**
 * CORS is a security feature enforced by browsers to protect end users from potentially harmful cross-origin requests. When a frontend app makes a request to a backend hosted on a different domain, the browser checks the server's response headers for the Access-Control-Allow-Origin header. If the header matches the frontend's domain 
 (or is set to *), the browser allows the request. Otherwise, it blocks the resource. To enable communication between a frontend and backend hosted on different domains, the backend must include the appropriate Access-Control-Allow-Origin header in its response, specifying the frontend's domain or allowing all domains (*).
 */


const handleFetchFailure = () => {
  fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        // if response.status == 4xx or 5xx
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Only parse JSON if the response is ok
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error:", error)); // if there is a cors or network issue
};

const fetchPostRequest = () => {
  fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "khoubaib", company: "oracle" }),
  });
};
