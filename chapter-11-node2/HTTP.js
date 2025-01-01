const { createServer } = require("http");

let server = createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/plain" });
  request.on("data", (chunk) => {
    if (!response.write(chunk.toString())) {
      console.log("Backpressure detected, pausing request.");
      request.pause()
      response.once("drain", () => {
        console.log("Resuming request after drain.");
        request.resume();
      });
    }
  });
  
  request.on("end", () => {
    console.log("Request fully received, ending response.");
    response.end();
  })

  request.on("error", () => {
    console.error("Request error:", err);
    response.statusCode = 400;
    response.end("Bad request");
  })  
  
});

server.listen(8000, () => {
  console.log("listening at port: ", 8000);
});
