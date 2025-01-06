const { createServer } = require("http");


const server = createServer((request, response) => {
    response.writeHead(200, { "content-type": "plain/text" });
    request.on("data", chunk => {
        //release backpressure
        if(!response.write(chunk.toString().toUpperCase())) {
            request.pause();
            response.on("drain", () => {
                request.resume();
            })
        }
    })
    request.on("end", () => {
        response.end();
    });

    request.on("error", (error) => {
        console.log(error);
    });

});

server.listen(8000, () => { 
    console.log("listening at port:", 8000);
})