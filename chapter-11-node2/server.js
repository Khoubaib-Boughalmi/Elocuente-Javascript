const { stat, readdir, unlink } = require("fs/promises");
const { createServer } = require("http");
const { resolve, sep } = require("path");
const { lookup } = require("mime-types");
const { createReadStream, rmdir, createWriteStream } = require("fs");

const methods = Object.create(null);

const server = createServer((request, response) => {
  const handler = methods[request.method] || notAllowed;
  handler(request)
    .catch((error) => {
      if (error.status) return error;
      return { body: `Internal Server error`, status: 500 };
    })
    .then(({ body = "", status = 200, type = "text/plain" } = {}) => {
      response.writeHead(status, { "Content-Type": type });
      if (body?.pipe)
        body.pipe(response); // body: readableStream; reponse: writableStream
      else response.end(body); // in-case body is not a readableStream (string || null)
    });
});

const baseDirectory = process.cwd();
// checks if the user trying to access forbidden directories
function urlPath(url) {
  let { pathname } = new URL(url, "http://d");
  let path = resolve(decodeURIComponent(pathname).slice(1));
  if (path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
    throw { status: 403, body: "Forbidden" };
  }
  return path;
}

const notAllowed = async (request) => {
  return {
    body: `Method ${request.method} not allowed`,
    status: 405,
  };
};

methods.GET = async function (request) {
  let path = urlPath(request?.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    return {
      status: 404,
      body: "Resource not found",
    };
  }
  if (stats.isDirectory()) {
    return { body: (await readdir(path)).join("\n") };
  } else {
    return { body: createReadStream(path), type: lookup(path) };
  }
};

methods.DELETE = async function (request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
    if (stats.isDirectory()) {
      await rmdir(path);
    } else {
      await unlink(path);
    }
    return { status: 204, body: "" };
  } catch (error) {
    if (error.code === "ENOENT") {
      return {
        status: 404,
        body: "Resource not found",
      };
    }
  }
};

const pipeStream = async(from, to) => {
  return new Promise ((resolve, reject) => {
    from.on("error", reject);
    to.on("error", reject);
    to.on("finish", resolve);
    from.pipe(to);
  })
}

methods.PUT = async function (request) {
  let path = urlPath(request.url);
  await pipeStream(request, createWriteStream(path));
  return { status: 204 };
};

server.listen(8000, () => {
  console.log("Server listening on port", 8000);
});
